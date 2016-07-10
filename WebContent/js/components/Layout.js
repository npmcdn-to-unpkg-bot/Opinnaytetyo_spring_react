import React from "react";

import Header from "./Header/Header";
import Gists from "./Listing/Gists";

/**
 * Kaikkien näkymien root komponentti
 */
class Layout extends React.Component {

	/**
	 * Renderöidään Header ja lapsi komponentit
	 */
	render() {
		return (
			<div className="content">
				<Header />
				{this.props.children}
			</div>
		);
	}

}

export default Layout;