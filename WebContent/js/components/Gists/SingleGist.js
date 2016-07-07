import React from "react";

class SingleGist extends React.Component {

	render() {
		return (
			<div className={this.props.activeGistId === this.props.id ? 
					"singleGist selected" : "singleGist"} 
					id={this.props.id} onClick={this.props.changeActive}>
			
				<div className="singleGistContainer">
					<p className="gistOwner">{this.props.ownerLogin + " / "}
							<a href={this.props.url}>{this.props.name}</a></p>
					<p className="description">{this.props.description}</p>
				</div>
			</div>
		)
	}
}

export default SingleGist;
