import React from "react";

import SingleGist from "./SingleGist";


class GistList extends React.Component {

	constructor() {
		super();
		this.changeActiveGist = this.changeActiveGist.bind(this);
	}
	
	changeActiveGist(e) {
		var id = e.currentTarget.id;
		if(id !== this.props.activeGistId) {
			this.props.setActiveGist(id);
		}
	}

	render() {
		if(this.props.loading === true) {
    		return <div className="loading"></div>; 
    	}
    	else {
    		var gists = this.props.gists.map(gist => 
				<SingleGist 
					key={gist.id} 
					id={gist.id}
					name={gist.files[0].filename} 
					url={gist.url}
					description={gist.description} 
					ownerLogin={gist.owner.login} 
					activeGistId={this.props.activeGistId}
					changeActive={this.changeActiveGist} 
				/>
    		);
			
    		if(this.props.fetchMethod !== "all") {
				return (
					<div className="listGists">
						{gists}
					</div>
				);
    		}
    		else {
    			return (
					<div className="listGists">
						{gists}
						<input type="button" id="loadMore" value="Lataa lisaa" />
					</div>
				);
    		}
    	}
    	
	    
	}

}

export default GistList;