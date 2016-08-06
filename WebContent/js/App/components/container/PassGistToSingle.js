import React from 'react';
import { connect } from 'react-redux';

import Gist from '../presentational/singleGist/Gist';

import { fetchSelectedGist } from '../../actions/actions';



const mapStateToProps = (state) => {
	return {
		activeGist: state.default.activeGist,
		isLoading: state.default.isLoadingActive
	}
}
/*
const mapDispatchToProps = (dispatch) => {
	return {
		// 6c8fef654c46d526a1244f0b1c182793
		activeGist: dispatch(fetchSelectedGist('ac8d3d0b270719ab10106c31f62ec444'))
	}
}
*/

const mapDispatchToProps = (dispatch) => {
	//Erotellaan gistin id URL-osoitteesta
	let gistId = window.location.hash.split("/")[2].split("?")[0];
	
	return {
		getGist: () => {
			dispatch(fetchSelectedGist(gistId))
		}
	}
}


const PassGistToSingle = connect(
	mapStateToProps, 
	mapDispatchToProps
)(Gist);


export default PassGistToSingle;