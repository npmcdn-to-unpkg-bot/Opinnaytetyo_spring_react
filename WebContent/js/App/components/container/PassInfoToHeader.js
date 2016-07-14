import React from 'react';
import { connect } from 'react-redux';
import { fetchSelectedGist } from '../../actions/actions';


import Header from '../presentational/header/Header';

require('../../../../css/Header.css');


const mapStateToProps = (state) => {
	return {
		userLogin: state.default.userLogin,
		avatarUrl: state.default.avatarUrl
	}
}


const PassInfoToHeader = connect(
	mapStateToProps
)(Header);


export default PassInfoToHeader;