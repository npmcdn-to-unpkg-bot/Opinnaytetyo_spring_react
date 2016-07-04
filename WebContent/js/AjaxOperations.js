import $ from "jquery";


export function	getGist(id) {
	
	var gist = null;
	
	$.ajax({
			headers: { 
	        	'Accept': 'application/json',
	       		'Content-Type': 'application/json' 
	   		},
			type: "GET",
			url: "http://localhost:8080/Opinnaytetyo_spring_react/gist/" + id,
			contentType: "application/json",
			dataType: 'json',
			success: function(result) {
				console.log("Onnistui");
				return result;
	  		},
	  		fail: function() {
	  			return null;
	  		}
	  		
		});
	
	
} 
	
	
	

