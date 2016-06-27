import React from "react";
import $ from "jquery";

import GistList from "./GistList";
import ShowSelectedGist from "./ShowSelectedGist";

export default class Gists extends React.Component {
	
	constructor() {
		super();
		this.changeSelected = this.changeSelected.bind(this);
		this.state = {
			gists: [],
			selectedGist: "",
			gist: null
		};
	}	

	
	getSingleGist(id) {
		this.getGist = $.ajax({
			headers: { 
	        	'Accept': 'application/json',
	       		'Content-Type': 'application/json' 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/singlegist?id=" + id,
			contentType: "application/json",
			dataType: 'json',
			success: function(result) {
				alert(result);
		     	 this.setState({
					gist: result
				});		
	  		}.bind(this)
		});
	} 


		changeSelected = (id) => {
			
			this.setState({selectedGist: id});
			this.getSingleGist(id); 
		}
	
	
	
	/*Haetaan gistit jos komponentin mounttaus onnistui*/
	componentWillMount() {
		this.getGists = $.ajax({
			headers: { 
	        	"Accept": "application/json",
	       		"Content-Type": "application/json" 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/gists",
			contentType: "application/json",
			dataType: "json",
			success: function(result) {
		      	this.setState({
					gists: result,
					selectedGist: result[0].id
				});	
				this.getSingleGist(result[0].id); 	
	  		}.bind(this)
		});
	}

	/*Keskeytetään haku jos mounttaus epäonnistuu*/
	componentWillUnmount() {
		this.getGists.abort();
	}
	

	render() {
		return (			
			<div>
				<div className="contentLeft">
					<GistList changeSelected={this.changeSelected} 
							selectedGist={this.state.selectedGist} gists={this.state.gists} />	
				</div>
				
				<div className="contentRight">
					<ShowSelectedGist gist={this.state.gist} />
				</div>
			</div>
		);
	}

}
