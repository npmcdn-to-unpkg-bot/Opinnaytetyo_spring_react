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
		
		//Näytetään latausindikaattori jos lataus on kesken
		if(this.props.loading === true) {
    		return <div className="loading"></div>; 
		}
		/*Puretaan gistit sisältävä taulukko ja 
		 *luodaan arvojen pohjalta singlegist komponentteja
		 */
    	else {
    		var color = this.props.colors
    		
    		var gists = this.props.gists.map(function(gist) {
    			var langColor = "#D0D0D0";
    			try {
    				langColor = color[gist.files[0].language].color;
    			}
    			catch(error) {
    				console.log(error);
    			}
    		
  
    			return (
					<SingleGist 
						key={gist.id} 
						id={gist.id}
						name={gist.files[0].filename} 
						description={gist.description} 
						language={gist.files[0].language}
						color={langColor}
						created={gist.createdAt}
						url={gist.url}
						owner={gist.owner.login} 
						activeGistId={this.props.activeGistId}
						changeActive={this.changeActiveGist} 
					/>
    			);
    		}, this); 
			
    		if(this.props.fetchMethod !== "all") {
				return (
					<ul className="listGists">
						{gists}
					</ul>
				);
    		}
    		else {
    			return (
					<ul className="listGists">
						{gists}
						<input type="button" id="loadMore" value="Lataa lisaa" />
					</ul>
				);
    		}
    	}
    	
	    
	}

}

export default GistList;