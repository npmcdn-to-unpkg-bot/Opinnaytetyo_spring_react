import React from "react";
import $ from "jquery";

import Filters from "./Filters";
import GistList from "./GistList";
import ShowActiveGist from "./ShowActiveGist";

require("../../../css/Header.css");
require("../../../css/Gists.css");

//Ladataan värikoodit ohjelmointikielille
const COLORS = require("../../../static/colors.json");


const SAMPLEDATA = [
{"id":"6c8fef654c46d526a1244f0b1c182793","description":"Programming language colors","url":"http://localhost:8080/Opinnaytetyo_spring_react/static/index.html#/gist/6c8fef654c46d526a1244f0b1c182793","owner":{"id":5699778,"login":"TatuPutto","avatarUrl":"https://avatars.githubusercontent.com/u/5699778?v=3","accessToken":null},"createdAt":"2016-07-09T10:51:12Z","files":[{"filename":"colors.json","language":"JSON","rawUrl":"https://gist.githubusercontent.com/TatuPutto/6c8fef654c46d526a1244f0b1c182793/raw/b1dc698101707f107d10bf9c7c562a3b08986e40/colors.json","content":null}],"ownedByCurrentUser":false},
{"id":"ac8d3d0b270719ab10106c31f62ec444","description":"Vie parametreja metodikutsussa react lapsikomponentista.","url":"http://localhost:8080/Opinnaytetyo_spring_react/static/index.html#/gist/ac8d3d0b270719ab10106c31f62ec444","owner":{"id":5699778,"login":"TatuPutto","avatarUrl":"https://avatars.githubusercontent.com/u/5699778?v=3","accessToken":null},"createdAt":"2016-07-08T14:17:15Z","files":[{"filename":"PassParameters.js","language":"JavaScript","rawUrl":"https://gist.githubusercontent.com/TatuPutto/ac8d3d0b270719ab10106c31f62ec444/raw/b823d55b2b680a78b6ab47c362db670ad7ed9c8d/PassParameters.js","content":null}],"ownedByCurrentUser":false},
{"id":"3c3b586ccb0f2699a4ce50fd19364ce3","description":"Kontekstin tuominen komponenttiin es6","url":"http://localhost:8080/Opinnaytetyo_spring_react/static/index.html#/gist/3c3b586ccb0f2699a4ce50fd19364ce3","owner":{"id":5699778,"login":"TatuPutto","avatarUrl":"https://avatars.githubusercontent.com/u/5699778?v=3","accessToken":null},"createdAt":"2016-07-07T08:56:07Z","files":[{"filename":"MyComp.js","language":"JavaScript","rawUrl":"https://gist.githubusercontent.com/TatuPutto/3c3b586ccb0f2699a4ce50fd19364ce3/raw/914c0f9d965b574482b5d5a2cb3a2c5aec968bc6/MyComp.js","content":null}],"ownedByCurrentUser":false},
{"id":"c7e46cc749361804cebfd02100e24d56","description":"React component es6 proptypes","url":"http://localhost:8080/Opinnaytetyo_spring_react/static/index.html#/gist/c7e46cc749361804cebfd02100e24d56","owner":{"id":5699778,"login":"TatuPutto","avatarUrl":"https://avatars.githubusercontent.com/u/5699778?v=3","accessToken":null},"createdAt":"2016-07-07T08:54:49Z","files":[{"filename":"Contacts.js","language":"JavaScript","rawUrl":"https://gist.githubusercontent.com/TatuPutto/c7e46cc749361804cebfd02100e24d56/raw/d0fb59dd3b6673e33236d9d362dfe1473eb35de3/Contacts.js","content":null}],"ownedByCurrentUser":false},
{"id":"2807380cdcea4e95bbca791b67788694","description":"Webpack konffit, React, es6, babel","url":"http://localhost:8080/Opinnaytetyo_spring_react/static/index.html#/gist/2807380cdcea4e95bbca791b67788694","owner":{"id":5699778,"login":"TatuPutto","avatarUrl":"https://avatars.githubusercontent.com/u/5699778?v=3","accessToken":null},"createdAt":"2016-07-06T10:16:18Z","files":[{"filename":"webpack.config.js","language":"JavaScript","rawUrl":"https://gist.githubusercontent.com/TatuPutto/2807380cdcea4e95bbca791b67788694/raw/e31a6282dcc7f06e45470e1a77d0d3284edd1d9b/webpack.config.js","content":null}],"ownedByCurrentUser":false},
{"id":"e7668578355c118a3c4adec8390c5056","description":"NPM konffit opinnaytetyo projektiin","url":"http://localhost:8080/Opinnaytetyo_spring_react/static/index.html#/gist/e7668578355c118a3c4adec8390c5056","owner":{"id":5699778,"login":"TatuPutto","avatarUrl":"https://avatars.githubusercontent.com/u/5699778?v=3","accessToken":null},"createdAt":"2016-07-06T10:14:15Z","files":[{"filename":"package.json","language":"JSON","rawUrl":"https://gist.githubusercontent.com/TatuPutto/e7668578355c118a3c4adec8390c5056/raw/e49d06f04e82e2d7665355f50b72929674b968e1/package.json","content":null}],"ownedByCurrentUser":false},
{"id":"012c6b3c60f6c94c60d8d972c7e3fdb5","description":"Testing creation","url":"http://localhost:8080/Opinnaytetyo_spring_react/static/index.html#/gist/012c6b3c60f6c94c60d8d972c7e3fdb5","owner":{"id":5699778,"login":"TatuPutto","avatarUrl":"https://avatars.githubusercontent.com/u/5699778?v=3","accessToken":null},"createdAt":"2016-07-05T19:40:02Z","files":[{"filename":"file1.java","language":"Java","rawUrl":"https://gist.githubusercontent.com/TatuPutto/012c6b3c60f6c94c60d8d972c7e3fdb5/raw/710aac7d5a98e663f30ea08692670ebab96b2145/file1.java","content":null}],"ownedByCurrentUser":false},
{"id":"9027ee902de058ff96e5467f2b62060f","description":"Alusta pyyntoa vastaava HTTP-metodi","url":"http://localhost:8080/Opinnaytetyo_spring_react/static/index.html#/gist/9027ee902de058ff96e5467f2b62060f","owner":{"id":5699778,"login":"TatuPutto","avatarUrl":"https://avatars.githubusercontent.com/u/5699778?v=3","accessToken":null},"createdAt":"2016-05-13T14:05:24Z","files":[{"filename":"AlustaHTTPMetodi.java","language":"Java","rawUrl":"https://gist.githubusercontent.com/TatuPutto/9027ee902de058ff96e5467f2b62060f/raw/2d4251195ab0c1f043b1967d57c4bddf07d3836b/AlustaHTTPMetodi.java","content":null}],"ownedByCurrentUser":false}
];


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
		this.toggleFilterView = this.toggleFilterView.bind(this);
		this.sortOldestToNewest = this.sortOldestToNewest.bind(this);
		this.sortNewestToOldest = this.sortNewestToOldest.bind(this);
		this.state = {
			fetch: "user",
			gists: null,
			activeGist: null,
			activeGistId: null,
			listLoading: true,
			gistLoading: true,
			filtersOpen: false
		};
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
		
		/*
		this.setState({
     		activeGist: SAMPLEDATA[id],
			gistLoading: false
		});		*/
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
		/*
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
				result.forEach(function(gist) {
					console.log(JSON.stringify(gist));
				});
				
				
		      	this.setState({
		      		listLoading: false,
					gists: result,
					activeGistId: result[0].id
				});	
				this.getActiveGist(result[0].id); 	
	  		}.bind(this)
		});
		*/
		
		this.setState({
      		listLoading: false,
			gists: SAMPLEDATA,
			activeGistId: SAMPLEDATA[0].id
		});	
		
		this.getActiveGist(0); 	
		
		
		
	}
	
	
	/**
	 * Keskeytetään gistien hakeminen jos 
	 * komponentin liittäminen ei onnistu DOMiin
	 */
	componentWillUnmount() {
		//this.getGists.abort();
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
	
	toggleFilterView() {
		if(this.state.filtersOpen === false) {
			this.setState({
				filtersOpen: true,
			});
		}
		else {
			this.setState({
				filtersOpen: false,
			});
		}
	}
	
	
	sortOldestToNewest() {
		var sortedGists = this.state.gists.sort(function(a, b) {
			var dateA = new Date(a.createdAt);
			var dateB = new Date(b.createdAt);
			
			return dateA - dateB;
		});
		
		this.setState({
			gists: sortedGists
		});
		
	}
	
	sortNewestToOldest() {
		var sortedGists = this.state.gists.sort(function(a, b) {
			var dateA = new Date(a.createdAt);
			var dateB = new Date(b.createdAt);
			return dateB - dateA;
		});
		
		this.setState({
			gists: sortedGists
		});
	}
	

	/**
	 * Renderöidään lapsikomponentit: gistit sisältävä lista 
	 * ja aktiivisen gistin sisältö
	 */
	render() {
		return (			
			<div className="gists">
				<Filters isOpen={this.state.filtersOpen}
					open={this.toggleFilterView}
					oldestNewest={this.sortOldestToNewest}
					newestOldest={this.sortNewestToOldest}
				 />
				
				<div className="contentLeft">
					<GistList 
							setActiveGist={this.setActiveGist} 
							activeGistId={this.state.activeGistId} 
							gists={this.state.gists}
							colors={COLORS}
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
