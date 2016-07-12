import React from 'react';
import { connect } from 'react-redux';
import { changeGist } from '../../actions/actions';
import GistList from "../presentational/GistList";


const mapStateToProps = (state) => {
	console.log(state.default.gists)
	
	return {
		gists: state.default.gists,
		activeGist: state.default.activeGist
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onGistClick: (id) => {
			dispatch(changeGist(id))
		}
	}
}

const PassGistsToList = connect(
	mapStateToProps,
	mapDispatchToProps
)(GistList);


export default PassGistsToList;