import React from "react";

export default class UserInfo extends React.Component {
	
	render() {
		return (
			<div className="userInfo">
				{/*}<img src={this.props.avatarUrl} />*/}
				<p>{this.props.login}</p>
			</div>		
		);
	}
	
}