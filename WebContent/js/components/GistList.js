import React from "react";

import SingleGist from "./SingleGist";
	
export default class GistList extends React.Component {

	constructor() {
		super();
		this.setActive = this.setActive.bind(this);
	}
	
	setActive(e) {
		var id = e.target.id;
		alert(id);
		this.props.changeSelected(id);
	}

	render() {
		var gists = this.props.gists.map(gist => 
			<SingleGist 
				key={gist.id} 
				id={gist.id}
				name={gist.files[0].filename} 
				url={gist.url}
				description={gist.description} 
				ownerLogin={gist.owner.login} 
				selectedGist={this.props.selectedGist}
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