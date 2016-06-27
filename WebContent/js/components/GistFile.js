import React from "react";

import Editor from "./Editor";

export default class GistFile extends React.Component {

	render() {
		return (
			<div className="gistFile">
				<div className="fileInfo">
					<a className="filename" href="">{this.props.filename}</a>
				</div>
				<Editor name={this.props.editorId} content={this.props.content} 
						amountOfLines={this.props.content.split("\n").length}/>
         	</div>
	    );
	}
	
}
	