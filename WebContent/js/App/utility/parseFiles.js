export function parseFiles(json) {
	var files = [];
	
	for (var key in json) {
		var singleFile = {};
		singleFile["filename"] = json[key].filename;
		singleFile["language"] = json[key].language;
		
		files.push(singleFile);
	}
	
	return files;
}

export function parseFilesWithContent(json) {
	var files = [];
	
	for (var key in json) {
		var singleFile = {};
		singleFile["filename"] = json[key].filename;
		singleFile["description"] = json[key].language;
		singleFile["content"] = json[key].content;
		
		files.push(singleFile);
	}
	
	return files;
}

