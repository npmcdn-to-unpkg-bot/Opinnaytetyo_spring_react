import React from 'react';  

import PassInfoToHeader from '../container/PassInfoToHeader';
import PassGistsToListingPage from '../container/PassGistsToListingPage';
import PassActiveGist from '../container/PassActiveGist';
import ListingPage from './listing/ListingPage';



class Root extends React.Component {
	
	render() {
		return (	
			<div className="content">
				<PassInfoToHeader />
				{this.props.children}
			
				{/*<PassGistsToList />
				<PassActiveGist />*/}
			</div>
		);
	}	
	
}	


export default Root;





