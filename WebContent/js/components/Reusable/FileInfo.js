import React from "react";


export default class FileInfo extends React.Component {
	
	render() {
		if(this.props.removable === false) {
			return(
					<div className="fileInfo">
						<input type="text"
								placeholder="Tiedostonimi, esim. File.java" />
					</div>
			);
		}
		else {
			return (
				<div className="fileInfo">
					<input type="text"
							placeholder="Tiedostonimi, esim. File.java" />
			
					<input type="button" className="removeFile" value="Poista" />
				</div>
			);
		}
			
	}
	
}