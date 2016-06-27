import React from "react";

import Header from "./Header";
import Gists from "./Gists";

export default class Layout extends React.Component {

	render() {
		return (
			<div className="content">
				<Header />
				{this.props.children}
			</div>
		);
	}

}