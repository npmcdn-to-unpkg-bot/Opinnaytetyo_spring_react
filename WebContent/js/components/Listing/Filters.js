import React from "react";

class Filters extends React.Component {
	
	
	render() {
		var styles = {height: "100px", width: "98%", "margin-left": "auto", "margin-right": "auto"};
		
		var styles2 = {height: "200px", width: "100%"};
		
		if(this.props.isOpen === true) {
			return (
				<div className="filters" styles={styles}>
					<input type="button" value="Lisää suodattimia" 
							onClick={this.props.open} />
				
					
						<div className="filteringOptions" styles={styles2}>
						<input type="button" value="All" 
							onClick={this.getGistsByAllUsers} 
						/>
					
						<input type="button" value="Users" 
								onClick={this.getGistsByUser} 
						/>
						<br />
						<input type="button" value="Uusimmat" 
							onClick={this.props.newestOldest} 
						/>
						
						<input type="button" value="Vanhimmat" 
							onClick={this.props.oldestNewest} 
						/>
					</div>
				</div>
			);
		}
		else {
			return (
				<div className="filters" styles={styles}>
					<input type="button" value="Lisää suodattimia" 
							onClick={this.props.open} />
				</div>
			);				
					
		}
	}
		
}

export default Filters;