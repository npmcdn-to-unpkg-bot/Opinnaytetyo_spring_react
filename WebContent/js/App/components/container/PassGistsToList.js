import React from 'react';
import { connect } from 'react-redux';
import { fetchSelectedGist } from '../../actions/actions';


import GistList from '../presentational/GistList';

require('../../../../css/Gists.css');

const mapStateToProps = (state) => {
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