import * as types from './actionTypes';
import { parseGistsJson, parseFiles, parseFilesWithSource } 
		from '../utility/parseGistsJson';


/////////////////////////////////////////////////////////////////////////
//Käyttäjätietojen hakeminen////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
export function requestUserInfo() {
	return {
		type: types.FETCH_USER_INFO_REQUEST
	};
}

export function receivedUserInfo(json) {
	activeGist.files = parseFilesWithSource(activeGist.files);

	return {
		type: types.FETCH_USER_INFO_SUCCESS,
		userLogin: json.login,
		avatarUrl: json.avatar_url
	};
}

export function userInfoFetchFailed() {
	return {
	    type: types.FETCH_USER_INFO_FAILURE,
	    
	}
}

/**
 * Haetaan valittu gist
 */
export function fetchUserInfo() {
	//var accessToken = getAccessToken();
	var accessToken = "";
					   
	const url = "https://api.github.com/applications//tokens/";
				 
	var authString = ":";
					 
	var encodedAuthString = window.btoa(authString); 
	console.log(encodedAuthString)
	
	var fetchInit = {
		method: 'get',
		headers: {
			'Accept': 'application/json',
       		'Content-Type': 'application/json',
       		'Authorization': 'Basic =='
		},
		mode: 'no-cors'
		
	};
	
	return dispatch => {
	    dispatch(requestUserInfo())
	    return fetch("https://api.github.com/applications/566fea61a0cebae27268/tokens/bf986deaa68710362faa65ffa123822396bb5f04", fetchInit)
	    .then(response => {
	    	if(response.ok) {
	    		console.log("Haku onnistui")
	    		response.json().then(json => dispatch(receivedUserInfo(json)))
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
	};
}























/////////////////////////////////////////////////////////////////////////
//Aktiivisen gistin hakeminen////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
export function requestSelectedGist(activeGistId) {
	return {
		type: types.FETCH_ACTIVE_GIST_REQUEST,
		activeGistId,
		isLoading: true
	};
}

export function receiveSelectedGist(activeGist) {
	activeGist.files = parseFilesWithSource(activeGist.files);
	
	return {
		type: types.FETCH_ACTIVE_GIST_SUCCESS,
		activeGist,
		isLoading: false
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
	const fetchInit = {
		method: 'get',
		headers: {
			'Accept': 'application/json',
       		'Content-Type': 'application/json',
       		'Authorization': 'token 6d3005f4f0a10c6086bd2c3a315b1366f4ad2024'
		}
	};
	
	return dispatch => {
	    dispatch(requestSelectedGist(id))
	    return fetch('https://api.github.com/gists/' + id, fetchInit)
	    .then(response => {
	    	if(response.ok) {
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


/////////////////////////////////////////////////////////////////////////
//Hakuehtoja vastaavien gistien hakeminen////////////////////////////////
/////////////////////////////////////////////////////////////////////////


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
export function receiveGists(json) {
	return {
	    type: types.FETCH_GISTS_SUCCESS,
	    gists: parseGistsJson(json),
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
	console.log("Haetaan gistit")
	var fetchInit = {
		method: 'get',
		headers: {
			'Accept': 'application/json',
       		'Content-Type': 'application/json',
       		'Authorization': 'token 6d3005f4f0a10c6086bd2c3a315b1366f4ad2024'
		}
	};
	
	return dispatch => {
	    dispatch(requestGists());//Loaderit päälle
	    
	    return fetch('https://api.github.com/users/TatuPutto/gists', fetchInit)
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
















