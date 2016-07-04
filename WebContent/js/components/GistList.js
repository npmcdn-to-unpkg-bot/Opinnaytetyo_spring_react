import React from "react";

import SingleGist from "./SingleGist";


export default class GistList extends React.Component {

	constructor() {
		super();
		this.setActive = this.setActive.bind(this);
	}
	
	setActive(e) {
		var id = e.currentTarget.id;
		this.props.changeActive(id);
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
					setActive={this.setActive} 
				/>
    		);
			
    		return (
				<div className="listGists">
    				{gists}
    			</div>
    		);
    	}
    	
	    
	}

}