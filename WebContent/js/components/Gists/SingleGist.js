import React from "react";

class SingleGist extends React.Component {
	
	
	
	
	render() {
		var description = this.props.description; 
		if(description.length > 150) {
			description = description.substring(0, 150) + "...";
		}
		
		var spanStyle= {background: this.props.color};
		
		var active = this.props.activeGistId === this.props.id ? 
				"singleGist active" : "singleGist"
					
		return (
			<li className={active} 
					id={this.props.id} onClick={this.props.changeActive}>
			
				<div className="contentWrapper">
					<span className="title">
						{this.props.owner + " / "}
								<a href={this.props.url}>{this.props.name}</a>
					</span>
							
					<span className="description">
						{description}
					</span>
					
					<span className="created">
						Päivitetty: {this.props.created}
					</span>
					
					<span className="language" style={spanStyle}>
						{this.props.language}
					</span>
				</div>
			</li>
		);
	}
}

export default SingleGist;
