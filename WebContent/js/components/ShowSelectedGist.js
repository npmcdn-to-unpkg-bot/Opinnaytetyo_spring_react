import React from "react";

import GistInfo from "./GistInfo";
import GistFile from "./GistFile";

export default class ShowSelectedGist extends React.Component {
	
	render() {
		if(this.props.loading === true) {	
			return <div className="loading"></div>;	
		}
		else {
			var files = this.props.gist.files.map(function(file, index) {
				return <GistFile key={file.filename} filename={file.filename} content={file.content} editorId={"editor" + index} />
			});
			
			return (
				<div className="showActiveGist">
					<GistInfo name={this.props.gist.files[0].filename} description={this.props.gist.description} 
							viewUrl={this.props.gist.viewUrl} owner={this.props.gist.owner.login} avatarUrl={this.props.gist.avatarUrl} />
		
					<div className="gistFiles">
						{files}
					</div>
				</div>
	   	 	);
		}
	}
	
}