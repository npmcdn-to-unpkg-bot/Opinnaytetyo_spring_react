import React from 'react';
import { connect } from 'react-redux';



import ListingPage from '../presentational/ListingPage';

import { fetchUserInfo, fetchGists, fetchSelectedGist } from '../../actions/actions';


require('../../../../css/Gists.css');

var activeId = null;

const mapStateToProps = (state) => {
	activeId = state.default.activeGistId;
	console.log(state.default.activeGist)
	return {
		gists: state.default.gists,
		activeGist: state.default.activeGist,
		activeGistId: state.default.activeGistId,
		isLoadingList: state.default.isLoadingList,
		isLoadingActive: state.default.isLoadingActive
	}
}


const mapDispatchToProps = (dispatch, state) => {
	return {
		setActive: (id) => {
			if(id !== activeId) {
				dispatch(fetchSelectedGist(id))
			}
			else {
				console.log("aktiivinen")
			}
		}
	}
}

const PassGistsToListingPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListingPage);


export default PassGistsToListingPage;