import React from "react";
import $ from "jquery";

import GistList from "./GistList";
import ShowSelectedGist from "./ShowSelectedGist";

export default class Gists extends React.Component {
	
	constructor() {
		super();
		this.changeActiveGist = this.changeActiveGist.bind(this);
		this.getActiveGist = this.getActiveGist.bind(this);
		this.navigate = this.navigate.bind(this);
		this.state = {
			fetch: "user",
			gists: null,
			activeGist: null,
			activeGistId: null,
			listLoading: true,
			gistLoading: true
		};
	}	

	
	changeActiveGist(id) {
		this.setState({
			gistLoading: true,
			activeGistId: id
		});
		this.getActiveGist(id); 
	}
	
	
	getActiveGist(id) {
		this.getGist = $.ajax({
			headers: { 
	        	'Accept': 'application/json',
	       		'Content-Type': 'application/json' 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/gist/" + id,
			contentType: "application/json",
			dataType: 'json',
			success: function(result) {
		     	 this.setState({
		     		activeGist: result,
					gistLoading: false
				});		
	  		}.bind(this)
		});
	} 


	fetchNewGists() {
		this.getNew = $.ajax({
			headers: { 
	        	"Accept": "application/json",
	       		"Content-Type": "application/json" 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/gists?fetch=" + this.state.fetch,
			contentType: "application/json",
			dataType: "json",
			success: function(result) {
		      	this.setState({
		      		listLoading: false,
					gists: result,
					activeGistId: result[0].id
				});	
				this.getActiveGist(result[0].id); 	
	  		}.bind(this)
		});
	}
	
	
	
	/*Haetaan gistit jos komponentin mounttaus onnistui*/
	componentWillMount() {
		this.getGists = $.ajax({
			headers: { 
	        	"Accept": "application/json",
	       		"Content-Type": "application/json" 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/gists?fetch=" + this.state.fetch,
			contentType: "application/json",
			dataType: "json",
			success: function(result) {
		      	this.setState({
		      		listLoading: false,
					gists: result,
					activeGistId: result[0].id
				});	
				this.getActiveGist(result[0].id); 	
	  		}.bind(this)
		});
	}

	/*Keskeytetään haku jos mounttaus epäonnistuu*/
	componentWillUnmount() {
		this.getGists.abort();
	}
	
	
	navigate() {
		if(this.state.fetch === "user") {
			this.props.history.pushState(null, "/?fetch=all");
			this.setState({fetch: "all"});
			this.fetchNewGists();
		}
		else {
			this.props.history.pushState(null, "/?fetch=user");
			this.setState({fetch: "user"});
			this.fetchNewGists();
		}
		
	}
	

	render() {
		return (			
			<div>
				<input type="button" value="Kaikki" onClick={this.navigate.bind(this)} />
			
			
				<div className="contentLeft">
					<GistList changeActive={this.changeActiveGist} 
							activeGistId={this.state.activeGistId} gists={this.state.gists} 
							loading={this.state.listLoading} />	
				</div>
				
				<div className="contentRight">
					<ShowSelectedGist gist={this.state.activeGist} 
							loading={this.state.gistLoading} />
				</div>
			</div>
		);
	}

}
