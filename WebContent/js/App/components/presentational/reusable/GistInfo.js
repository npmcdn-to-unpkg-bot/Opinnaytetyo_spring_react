import React from "react";
import {Link} from "react-router";

export default class GistInfo extends React.Component {
	
	render() {
		return (
			<div className="gistInfo">
				<span className="title">
					<img className="ownerAvatar" src={this.props.avatarUrl} />
					<a id="viewGist">{this.props.owner}</a>
				</span>
				
				<span className="actions">
					<Link to={"/delete/" + this.props.id}>
						<input type="button" id="deleteGist" value="Poista"/>
					</Link> 
					<Link to={"/edit/" + this.props.id}>
						<input type="button" id="editGist" value="Muokkaa"/>
					</Link> 
				</span>
				
				<br/>
				<span className="desc">
					<a href={"/gist/" + this.props.id}>{this.props.name}</a>
					<p className="description">{this.props.description}</p>
				</span>
				
				
         	</div>
	    );
	}

}
