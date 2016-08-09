import React from 'react';
import { connect } from 'react-redux';



import ListingPage from '../presentational/listing/ListingPage';

import { fetchUserInfo, fetchGists, fetchSelectedGist, 
		sortOldestToNewest, sortNewestToOldest} from '../../actions/actions';


require('../../../../css/Gists.css');

var activeId = null;

const mapStateToProps = (state) => {
	activeId = state.default.activeGistId;
	
	return {
		gists: state.default.gists,
		activeGist: state.default.activeGist,
		activeGistId: state.default.activeGistId,
		isLoadingList: state.default.isLoadingList,
		isLoadingActive: state.default.isLoadingActive,
		chronologicalOrder: state.default.chronologicalOrder
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		getGists: () => {
			dispatch(fetchGists());
		},
		setActive: (id) => {
			if(id !== activeId) {
				dispatch(fetchSelectedGist(id));
			}
		},
		sortByDate: (gists, chronologicalOrder) => {
			console.log(chronologicalOrder)
			if(chronologicalOrder) {
				
				console.log('Vanhimmasta uusimpaan')
				dispatch(sortOldestToNewest(gists));
			}
			else {
				console.log('Uusimmasta vanhimpaan')
				dispatch(sortNewestToOldest(gists));
			}
		}
	};
}

const PassGistsToListingPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListingPage);


export default PassGistsToListingPage;