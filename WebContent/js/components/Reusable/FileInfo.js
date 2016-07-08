import React from "react";


class FileInfo extends React.Component {
	
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
			
					<input type="button" className="removeFile" value="Poista" 
							onClick={() => this.props.remove(this.props.id)} /> 
				</div>
			);
		}
			
	}
	
}

export default FileInfo;