import React from 'react';
import GistListItem from './GistListItem';

class GistList extends React.Component {

	constructor() {
		super();
		this.changeActiveGist = this.changeActiveGist.bind(this);
		this.getColorCode = this.getColorCode.bind(this);
	}
	
	/**
	 * Lähetetään aktiiviseksi vaihdettavan gistin id
	 */
	changeActiveGist(e) {
		var id = e.currentTarget.id;
		if(id !== this.props.activeGistId) {
			this.props.setActiveGist(id);
		}
	}

	
	/**
	 * Haetaan kielelle määrietty värikoodi
	 */
	getColorCode(language) {
		try {
			var colorCode = this.props.colors[language].color;
		}
		catch(error) {
			var colorCode = '#D0D0D0';
		}
		
		return colorCode;
	}
	
	
	
	render() {
		//Näytetään latausindikaattori jos lataus on kesken
		if(this.props.loading === true) {
    		return <div className='loading'></div>; 
		}
		/*Puretaan gistit sisältävä taulukko ja 
		 *luodaan arvojen pohjalta singlegist komponentteja
		 */
    	else {
    		var gists = this.props.gists.map(gist => {
    			return (
					<GistListItem 
						key={gist.id} 
						id={gist.id}
						name={gist.files[0].filename} 
						description={gist.description} 
						language={gist.files[0].language}
						color={this.getColorCode(gist.files[0].language)}
						created={gist.createdAt}
						url={gist.url}
						owner={gist.owner.login} 
						//activeGistId={this.props.activeGistId}
						//changeActive={this.changeActiveGist} 
					/>
    			);
    		}, this); 
			
    		if(this.props.fetchMethod !== 'all') {
				return (
					<div className='contentLeft'>
						<ul className='listGists'>
							{gists}
						</ul>
					</div>
				);
    		}
    		else {
    			return (
    				<div className='contentLeft'>
						<ul className='listGists'>
							{gists}
							<input type='button' id='loadMore' value='Lataa lisaa' />
						</ul>
					</div>		
				);
    		}
    	}
    	
	    
	}
		
}

export default GistList;
