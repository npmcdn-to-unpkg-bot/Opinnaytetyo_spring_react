import React from 'react';

import GistInfo from '../reusable/GistInfo';
import GistFile from '../reusable/GistFile';

class Gist extends React.Component {
	
	render() {
		const gist = this.props.activeGist;
		
		if(gist === null) {	
			return <div className='loading'></div>;	
		}
		else {
			var files = gist.files.map(function(file, index) { 
				return <GistFile 
							key={file.filename} 
							filename={file.filename} 
							content={file.content} 
							editorId={'editor' + index} 
						/>
			});

			return (
				<div className='showActiveGist'>
					<GistInfo name={gist.files[0].filename} description={gist.description} 
							viewUrl={gist.viewUrl} owner={gist.owner.login} avatarUrl={gist.avatarUrl} />
		
					<div className='gistFiles'>
						{files}
					</div>
				</div>
	   	 	);
		}

	}
	
}

export default Gist;