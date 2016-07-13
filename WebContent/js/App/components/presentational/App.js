import React from 'react';  

import PassGistsToList from '../container/PassGistsToList';
import PassActiveGist from '../container/PassActiveGist';
import ListingPage from './ListingPage';

class App extends React.Component {
	
	render() {
		return (	
			<div className="content">
				<PassGistsToList />
				{/*<PassActiveGist />*/}
			</div>
		);
	}	
	
}	


export default App;





