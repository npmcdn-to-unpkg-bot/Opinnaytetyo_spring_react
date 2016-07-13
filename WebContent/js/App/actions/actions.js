import * as types from './actionTypes';
import { parseFiles, parseFilesWithContent } from '../utility/parseFiles';


export function requestSelectedGist(id) {
	return {
		type: types.FETCH_ACTIVE_GIST_REQUEST
	};
}

export function receiveSelectedGist(response) {
	response.files = parseFilesWithContent(response.files);

	return {
		type: types.FETCH_ACTIVE_GIST_SUCCESS,
		activeGist: response
	};
}

export function selectedGistFetchFailed() {
	return {
	    type: types.FETCH_ACTIVE_GIST_FAILURE,
	    isLoading: false
	}
}

/**
 * Haetaan valittu gist
 */
export function fetchSelectedGist(id) {
	var fetchInit = {
		method: 'get',
		headers: {
			'Accept': 'application/json',
       		'Content-Type': 'application/json',
       		'Authorization': 'token '
		}
	};
	
	return dispatch => {
	    dispatch(requestSelectedGist())
	    return fetch('https://api.github.com/gists/' + id, fetchInit)
	    .then(response => {
	    	if(response.ok) {
	    		console.log("Haku onnistui")
	    		response.json().then(json => dispatch(receiveSelectedGist(json)))
	    	}
	    	else {
	    	    const error = new Error(
	    	    		response.status + " " + response.statusText);
	    	    error.response = response;
	    	    throw error;
	    	}
	    }).catch(function(error) {
	    	  console.log('Haku ei onnistunut: ' + error.message);
	    });
	}
}



/**
 * Aloitetaan gistien haku
 */
export function requestGists(id) {
	return {
		type: types.FETCH_GISTS_REQUEST,
		invalidateCurrentList: true,
		isLoading: true		
	}
}


/**
 * Otetaan löydetyt gistit vastaan
 */
export function receiveGists(response) {
	response.forEach(gist => {
		gist.files = parseFiles(gist.files);
	});

	return {
	    type: types.FETCH_GISTS_SUCCESS,
	    gists: response,
	    isLoading: false
	}
}



/**
 * Käsitellään epäonnistunut haku
 * 
 */
export function gistsFetchFailed() {
	return {
	    type: types.FETCH_GISTS_FAILURE,
	    isLoading: false
	}
}



/**
 * Suoritetaan gistien hakeminen
 */
export function fetchGists() {
	var fetchInit = {
		method: 'get',
		headers: {
			'Accept': 'application/json',
       		'Content-Type': 'application/json',
       		'Authorization': 'token '
		}
	};
	
	return dispatch => {
	    dispatch(requestGists());//Loaderit päälle
	    
	    return fetch('https://api.github.com/users/octocat/gists', fetchInit)
    	.then(response => {
    		if(response.ok) {
				response.json().then(json => {
					dispatch(receiveGists(json));
					dispatch(fetchSelectedGist(json[0].id));
				})
			}
			else {
				const error = new Error(
						response.status + " " + response.statusText);
				error.response = response;
				throw error;
			}
		}).catch(function(error) {
			console.log('Haku ei onnistunut: ' + error.message);
		});
	}
}
















