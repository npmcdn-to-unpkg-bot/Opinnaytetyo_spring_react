import React from "react";

export default class GistInfo extends React.Component {
	
	render() {
		return (
			<div className="gistInfo">
				<img className="ownerAvatar" src={this.props.avatarUrl} />
				<a id="viewGist" href="{this.props.viewUrl}">{this.props.owner + " / "}{this.props.name}</a>
				{/*TODO: napit, kuvaus, yms.*/} 		
         	</div>
	    );
	}

}
