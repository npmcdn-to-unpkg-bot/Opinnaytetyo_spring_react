import React from "react";
import $ from "jquery";

import GistList from "./Gists/GistList";
import ShowActiveGist from "./Gists/ShowActiveGist";

require("../../css/Header.css");
require("../../css/Gists.css");

//Ladataan värikoodit ohjelmointikielille
var colors = require("../../static/colors.json");


/**
 * Gistien listausnäkymä
 */
class Gists extends React.Component {
	
	
	/**
	 * Tuodaan propsit ja konteksti, bindataan metodit 
	 * Asetetaan komponentin alustava state
	 */
	constructor() {
		super();
		this.setActiveGist = this.setActiveGist.bind(this);
		this.getActiveGist = this.getActiveGist.bind(this);
		this.getGistsByAllUsers = this.getGistsByAllUsers.bind(this);
		this.getGistsByUser = this.getGistsByUser.bind(this);
		this.state = {
			fetch: "user",
			gists: null,
			activeGist: null,
			activeGistId: null,
			listLoading: true,
			gistLoading: true
		};
		
		console.log(colors["JavaScript"].color);
	}	

	 
	/**
	 * Vaihdetaan aktiivinen gist
	 */
	setActiveGist(id) {
		this.setState({
			gistLoading: true,
			activeGistId: id
		});
		this.getActiveGist(id); 
	}
	
	
	/**
	 * Haetaan aktiiviseksi asetettu gist
	 */
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


	fetchNewGists(fetchMethod) {
		this.getNew = $.ajax({
			headers: { 
	        	"Accept": "application/json",
	       		"Content-Type": "application/json" 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/gists?fetch=" + 
					fetchMethod,
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
	
	
	
	/**
	 * Haetaan alustavat gistit
	 */
	componentWillMount() {
		this.getGists = $.ajax({
			headers: { 
	        	"Accept": "application/json",
	       		"Content-Type": "application/json" 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/gists?fetch=" + 
					this.state.fetch,
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
	
	
	/**
	 * Keskeytetään gistien hakeminen jos 
	 * komponentin liittäminen ei onnistu DOMiin
	 */
	componentWillUnmount() {
		this.getGists.abort();
	}
	
	
	getGistsByAllUsers() {
		if(this.state.fetch !== "all") {
			this.context.router.push("/?fetch=all");
			this.setState({
				fetch: "all",
				listLoading: true
			});
			this.fetchNewGists("all");
		}
	}
	
	getGistsByUser() {
		if(this.state.fetch !== "user") {
			this.context.router.push("/?fetch=user");
			this.setState({
				fetch: "user",
				listLoading: true
			});
			this.fetchNewGists("user");
		}	
	}
	

	/**
	 * Renderöidään lapsikomponentit: gistit sisältävä lista 
	 * ja aktiivisen gistin sisältö
	 */
	render() {
		return (			
			<div className="gists">
				<input type="button" value="All" 
						onClick={this.getGistsByAllUsers} 
				/>
				
				<input type="button" value="Users" 
						onClick={this.getGistsByUser} 
				/>
			
				<div className="contentLeft">
					<GistList 
							setActiveGist={this.setActiveGist} 
							activeGistId={this.state.activeGistId} 
							gists={this.state.gists}
							colors={colors}
							loading={this.state.listLoading} 
							fetchMethod={this.state.fetch}
					/>	
				</div>
				
				<div className="contentRight">
					<ShowActiveGist 
							id={this.state.activeGistId}
							gist={this.state.activeGist} 
							loading={this.state.gistLoading} 
					/>
				</div>
			</div>
		);
	}
	
}


Gists.contextTypes = {
	    router: React.PropTypes.object.isRequired
};


export default Gists;
