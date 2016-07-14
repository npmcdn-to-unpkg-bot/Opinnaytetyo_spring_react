import React from 'react';
import { connect } from 'react-redux';

import ShowActiveGist from '../presentational/ShowActiveGist';

const mapStateToProps = (state) => {
	return {
		activeGist: state.default.activeGist
	}
}


const PassActiveGist = connect(
	mapStateToProps
)(ShowActiveGist);


export default PassActiveGist;