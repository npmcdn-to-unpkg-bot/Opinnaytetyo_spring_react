import React from 'react';


class GistListItem extends React.Component {
	
	render() {
		return (
			<li onClick={this.props.onClick}>
				{this.props.description}
			</li>
		);
	}
	
	
}

export default GistListItem;