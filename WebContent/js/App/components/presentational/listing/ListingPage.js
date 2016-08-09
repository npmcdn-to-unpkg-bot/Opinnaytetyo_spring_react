import React from 'react';

import Filters from './Filters';
import GistList from './GistList';
import ShowActiveGist from './ShowActiveGist';

class ListingPage extends React.Component {
	
	componentWillMount() {
		{this.props.getGists()}
	}
	
	render() {
		return (			
			<div className='gists'>
				<div className='contentLeft'>
					<Filters
						chronologicalOrder={this.props.chronologicalOrder}
						sortByDate={this.props.sortByDate}
						gists={this.props.gists}
					/>
					<GistList 
						gists={this.props.gists} 
						activeGistId={this.props.activeGistId}
						setActive={this.props.setActive}
						isLoading={this.props.isLoadingList}
					/>
				</div>	
				<div className='contentRight'>	
					<ShowActiveGist
						gist={this.props.activeGist}
						isLoadingList={this.props.isLoadingList}
						isLoadingActive={this.props.isLoadingActive}
					/>
				</div>	
			</div>
		);
	}
	
}

export default ListingPage;