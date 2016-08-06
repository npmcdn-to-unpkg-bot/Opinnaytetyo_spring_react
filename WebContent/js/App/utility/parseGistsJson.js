export function parseGistsJson(json) {
	let gists = [];
	
	json.forEach(gist => {
		gists.push(Object.assign({}, gist, {
			url: "#/gist/" + gist.id,
			files: parseFiles(gist.files)
		}));
		console.log(gists);
	})
	
	return gists;
}

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

export function parseFilesWithSource(json) {
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

