import React from "react";
import {Link} from "react-router";
import $ from "jquery";

export default class Header extends React.Component {

	constructor() {
		super();
		this.state = {
				login: "",
				avatarUrl: ""
		};
	}

	componentWillMount() {
		this.getUserInfo = $.ajax({
			headers: { 
	        	'Accept': 'application/json',
	       		'Content-Type': 'application/json' 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/userinfo",
			contentType: "application/json",
			dataType: 'json',
			success: function(result) {
		     	 this.setState({
					login: result[0],
					avatarUrl: result[1]
				});		
	  		}.bind(this)			
		});
		
	}

	componentWillUnmount() {
		this.getUserInfo.abort();
	}


	render() {
		return (
			<div className="header">
				<div className="headerContent">
					<div className="userInfo">
						{/*}<img src={this.state.avatarUrl} />*/}
						<p>{this.state.login}</p>
					</div>
					
					<ul className="navmenu">
						<li><Link to="/">Listaa gistit</Link></li>
						<li><Link to="create">Luo uusi gist</Link></li>
					</ul>
				</div>	
			</div>	
		);
	}

}