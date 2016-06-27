import React from "react";

export default class SingleGist extends React.Component {

	render() {
		return (
			<div className={this.props.selectedGist === this.props.id ? 
					"singleGist selected" : "singleGist"} 
					id={this.props.id} onClick={this.props.setActive}>
			
				<div className="singleGistContainer">
					<p className="gistOwner">{this.props.ownerLogin + " / "}
							<a href={this.props.url}>{this.props.name}</a></p>
					<p className="description">{this.props.description}</p>
				</div>
			</div>
		)
	}
}
