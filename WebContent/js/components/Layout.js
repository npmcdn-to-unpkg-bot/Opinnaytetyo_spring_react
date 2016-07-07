import React from "react";

import Header from "./Header";
import Gists from "./Gists";

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