import React from 'react';
import GistListItem from "./GistListItem";

class GistList extends React.Component {

	render() {/*
		var gists = this.props.gists.map(gist => {
			return (
		 		<GistListItem 
		 			key={gist.id}
		 			description={gist.description}
		 			onClick={() => this.props.onGistClick(gist.id)}
		 		/>
		 	);
		}, this);	
		*/
	
		const {gists, activeGist} = this.props;
		
		return (
			<div className="gists">
				<ul>	
					{activeGist}
				</ul>
			</div>
		);
	}
		
}

export default GistList;
