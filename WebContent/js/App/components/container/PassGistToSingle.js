import React from 'react';
import { connect } from 'react-redux';

import Gist from '../presentational/singleGist/Gist';

import { fetchUserInfo, fetchGists, fetchSelectedGist } from '../../actions/actions';


const mapStateToProps = (state) => {
	return {
		activeGist: state.default.activeGist
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		activeGist: dispatch(fetchSelectedGist('6c8fef654c46d526a1244f0b1c182793'))
	}
}



const PassGistToSingle = connect(
	mapStateToProps
)(Gist);


export default PassGistToSingle;