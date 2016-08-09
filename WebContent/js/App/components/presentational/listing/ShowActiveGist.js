import React from 'react';

import GistInfo from '../reusable/GistInfo';
import GistFile from '../reusable/GistFile';

class ShowActiveGist extends React.Component {
	

	render() {
		
		if(this.props.isLoadingList === false && this.props.isLoadingActive === true) {	
			return <div className="loading"></div>;	
		}
		else if(this.props.gist !== null && this.props.isLoadingList === false && this.props.isLoadingActive === false) {	
			var files = this.props.gist.files.map((file, index) => {
				return (
					<GistFile 
						key={file.filename} 
						filename={file.filename} 
						content={file.content}
						editorId={'editor' + index} 
					/>
				);
			});
			
			return (
				<div className='showActiveGist'>
					<GistInfo 
						id={this.props.id} 
						name={this.props.gist.files[0].filename} 
						description={this.props.gist.description} 
						url={this.props.gist.viewUrl} 
						owner={this.props.gist.owner.login} 
						avatarUrl={this.props.gist.avatarUrl} 
					/>
		
					<div className='gistFiles'>
						{files}
					</div>
				</div>
	   	 	);
		}
		else {
			return <div className='contentRight'></div>;
		}
	}
	
}

export default ShowActiveGist;