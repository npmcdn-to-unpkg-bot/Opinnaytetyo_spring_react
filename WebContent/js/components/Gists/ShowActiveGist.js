import React from "react";

import GistInfo from "../Reusable/GistInfo";
import GistFile from "../Reusable/GistFile";

class ShowActiveGist extends React.Component {
	
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
					<GistInfo id={this.props.id} name={this.props.gist.files[0].filename} description={this.props.gist.description} 
							url={this.props.gist.viewUrl} owner={this.props.gist.owner.login} avatarUrl={this.props.gist.avatarUrl} />
		
					<div className="gistFiles">
						{files}
					</div>
				</div>
	   	 	);
		}
	}
	
}

export default ShowActiveGist;