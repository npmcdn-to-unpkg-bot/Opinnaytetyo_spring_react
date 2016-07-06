import React from "react";
import $ from "jquery";

import FileInfo from "./Reusable/FileInfo";
import Editor from "./Reusable/Editor";

export default class CreateGist extends React.Component {
	
	constructor() {
		super();
		this.addFile = this.addFile.bind(this);
		this.createGist = this.createGist.bind(this);
		this.state = {
			editors: ["editor0"]
		};
		
	}
	
	
	addFile() {
		this.setState({
			editors: this.state.editors.concat(
					["editor" + this.state.editors.length])
		});

	}
	
	
	createGist(isPublic) {
		var gist = {};
		var files = {};
		var description = $(".description").val();
		var fileFields = $(".gistFile");
		
		
		for(var i = 0; i < fileFields.length; i++) {
			var filename = $(fileFields[i]).find("input:text").val();
			var source = ace.edit("editor" + i).getValue();
				
			var file = {filename: filename, content: source};
			files[filename] = file;
		}
		
		gist["description"] = description;
		gist["ispublic"] = false;
		gist["files"] = files;
		console.log(JSON.stringify(gist));
		
		
		$.ajax({
			headers: { 
				'Accept': 'application/json',
		        'Content-Type': 'application/json' 
			},
			type: "POST",
		    url: "http://localhost:8080/Opinnaytetyo_spring_react/create",
		    data: JSON.stringify(gist),
		    dataType: "json"
		});
	}
	
	
	
	render() {
		var removable = this.state.editors.length === 1 ? false : true;
		
		console.log(removable);
		return (		
			<div>
				<input type="text" className="description" placeholder="Kuvaus"/>
				<div className="files">
				
					{this.state.editors.map(function(editor, index) { 
						return (
							<div className="gistFile" key={"file" + index}>
								<FileInfo key={"info" + index} removable={removable}/>
								<Editor key={editor} editorId={editor} />
							</div>	
						);
					})} 
					
				</div>
				
				<input type="button" value="Lisää tiedosto" onClick={this.addFile} />
				<input type="button" value="Luo salainen gist" onClick={this.createGist} />
				<input type="button" value="Luo julkinen gist" onClick="" />
			</div>
		);
		
		
	}
	
}