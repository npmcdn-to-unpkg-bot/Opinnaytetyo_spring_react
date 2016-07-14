import React from "react";
import {Link} from "react-router";

class NavMenu extends React.Component {
	
	render() {
		return (
			<ul className="navmenu">
				<li><Link to="/">Listaa gistit</Link></li>
				<li><Link to="create">Luo uusi gist</Link></li>
			</ul>
				
		);
	}
	
}

export default NavMenu;