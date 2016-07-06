import React from "react";
import AceEditor from "react-ace";

export default class Editor extends React.Component {
	
	componentDidMount() {
		console.log(this.props.editorId)
	    var editor = ace.edit(this.props.editorId);
	    editor.setTheme("ace/theme/cobalt");
		editor.getSession().setMode("ace/mode/java");
	    editor.setShowPrintMargin(false);
	    editor.setReadOnly(false);
	    editor.setOptions({minLines: 20});
	    editor.setOptions({maxLines: 60});
	    editor.selection.moveTo((20), 0);
	}
	
	render() {
		return <div id={this.props.editorId}></div>;
	}
	
}