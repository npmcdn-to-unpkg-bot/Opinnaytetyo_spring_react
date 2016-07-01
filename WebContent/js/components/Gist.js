import React from "react";
import $ from "jquery";

import GistInfo from "./GistInfo";
import GistFile from "./GistFile";

export default class Gist extends React.Component {
	
	constructor() {
		super();
		this.state = {
			gist: null
		};
	}
	
	componentWillMount() {
		this.getGist = $.ajax({
			headers: { 
	        	"Accept": "application/json",
	       		"Content-Type": "application/json" 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/singlegist?id=" + id,
			contentType: "application/json",
			dataType: "json",
			success: function(result) {
		      	this.setState({
					gist: result,
				});	
	  		}.bind(this)
		});
	}
	
	componentWillUnmount() {
		this.getGist.abort();
	}
	
	render() {
		if(this.state.gist === null) {	
			return <div className="loading"></div>;	
		}
		else {
			var files = this.state.gist.files.map(function(file, index) { 
				return <GistFile key={file.filename} filename={file.filename} content={file.content} editorId={"editor" + index} />
			});

			return (
				<div className="showActiveGist">
					<GistInfo name={this.state.gist.files[0].filename} description={this.state.gist.description} 
							viewUrl={this.state.gist.viewUrl} owner={this.state.gist.owner.login} avatarUrl={this.state.gist.avatarUrl} />
		
					<div className="gistFiles">
						{files}
					</div>
				</div>
	   	 	);
		}

	}
}