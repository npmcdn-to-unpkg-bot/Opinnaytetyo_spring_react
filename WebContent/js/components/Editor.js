import React from "react";
import AceEditor from "react-ace";

export default class Editor extends React.Component {
	
	render() {
		return (
			<AceEditor
			    mode="java"
			    theme="cobalt"
			    name={this.props.editorDiv}
			    editorProps={{$blockScrolling: true}}
				readOnly={true}
				showPrintMargin={false}
				maxLines={this.props.amountOfLines}
				value={this.props.content}
			/>
		);
	}
	
}