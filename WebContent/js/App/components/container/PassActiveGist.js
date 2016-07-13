import React from 'react';
import { connect } from 'react-redux';
import { changeGist } from '../../actions/actions';

import ShowActiveGist from "../presentational/ShowActiveGist";


const mapStateToProps = (state) => {
	return {
		activeGist: state.default.activeGist
	}
}


const PassActiveGist = connect(
	mapStateToProps
)(ShowActiveGist);


export default PassActiveGist;