import React from "react";

import PassGistsToList from '../container/PassGistsToList';
//import ShowActiveGist from "./ShowActiveGist";

//Ladataan värikoodit ohjelmointikielille
//const COLORS = require("../../../static/colors.json");


class ListingPage extends React.Component {
	
	render() {
		return (			
			<div className="gists">
				
				<div className="contentLeft">
					<PassGistsToList />	
				</div>
				
				
			</div>
		);
	}
	
}