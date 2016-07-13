import React from 'react';

import GistInfo from './reusable/GistInfo';
import GistFile from './reusable/GistFile';

class ShowActiveGist extends React.Component {
	

	render() {
		var { activeGist } = this.props;
		
		
		
		if(activeGist === null) {	
			//return <div  className="loading"></div>;	
			return <div></div>;	
		}
		else {
			var files = activeGist.files.map((file, index) => {
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
				<div className='contentRight'>
					<div className='showActiveGist'>
						<GistInfo 
							id={this.props.id} 
							name={activeGist.files[0].filename} 
							description={activeGist.description} 
							url={activeGist.viewUrl} 
							owner={activeGist.owner.login} 
							avatarUrl={activeGist.avatarUrl} 
						/>
			
						<div className='gistFiles'>
							{files}
						</div>
					</div>
				</div>
	   	 	);
		}
	}
	
}

export default ShowActiveGist;