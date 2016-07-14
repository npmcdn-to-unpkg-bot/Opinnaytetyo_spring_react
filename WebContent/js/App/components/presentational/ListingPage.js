import React from 'react';

import GistList from './GistList';
import ShowActiveGist from './ShowActiveGist';
//import ShowActiveGist from "./ShowActiveGist";

//Ladataan värikoodit ohjelmointikielille
//const COLORS = require("../../../static/colors.json");


class ListingPage extends React.Component {
	
	render() {
		return (			
			<div className='gists'>
				<div className='contentLeft'>
					<GistList 
						gists={this.props.gists} 
						activeGistId={this.props.activeGistId}
						setActive={this.props.setActive}
						isLoading={this.props.isLoadingList}
					/>
				</div>	
				<div className='contentRight'>	
					<ShowActiveGist
						gist={this.props.activeGist}
						isLoadingList={this.props.isLoadingList}
						isLoadingActive={this.props.isLoadingActive}
					/>
				</div>	
			</div>
		);
	}
	
}

export default ListingPage;