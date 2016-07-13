import * as types from './actionTypes';
import { parseFiles } from '../utility/parseFiles';


export function changeGist(id) {

	//ACTION
	return {
		type: types.SELECT_GIST,
		id
	};
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
	console.log(response);
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
export function gistsFetchFailed(response) {
	return {
	    type: types.FETCH_GISTS_FAILURE,
	    isLoading: false
	}
}



/**
 * Suoritetaan gistien hakeminen
 */
export function fetchGist() {
	var fetchInit = {
		method: 'get',
		headers: {
			'Accept': 'application/json',
       		'Content-Type': 'application/json',
       		'Authorization': 'token '
		}
	};
	
	return dispatch => {
	    dispatch(requestGists())//Loaderit päälle
	    return fetch(
    		//"https://api.github.com/gists/6cad326836d38bd3a7ae", {
    		//"https://api.github.com/users/TatuPutto/gists", {
    		'https://api.github.com/users/octocat/gis', fetchInit)
    		
	    .then(response => {
	    	if(response.ok) {
	    		console.log('haku onnistui');
	    		response.json().then(json => dispatch(receiveGists(json)))
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
	    	
	    //.then(json => dispatch(receiveGists(json)))
	    	//error => dispatch(gistsFetchFailed())
	 
	  
	    
	    
	   // .then(json => dispatch(receiveGists(json)))
		    	
//		    		 if (response.status === 200) 
//		    			 console.log("Haku onnistui");
		    			 //response.json();
		    		// }
		    		 
//		    	})
		    	
//		    	
	 }
}










