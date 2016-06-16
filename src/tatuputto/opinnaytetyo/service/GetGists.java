package tatuputto.opinnaytetyo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tatuputto.opinnaytetyo.dao.AuthorizedConnectionOauth;
import tatuputto.opinnaytetyo.domain.Gist;
import tatuputto.opinnaytetyo.json.ParseMultipleGists;


@Service
public class GetGists {
	
	private AuthorizedConnectionOauth connection;
	private ParseMultipleGists parse;
	
	@Autowired
	public GetGists(AuthorizedConnectionOauth connection, ParseMultipleGists parse) {
		this.connection = connection;
		this.parse = parse;
	}
	
		
	public ArrayList<Gist> getGists(String fetchMethod, String accessToken) {
		String[] responseContent = null;
		String url = "";
		
		//Haetaan käyttäjän gistit
		if(fetchMethod.equals("user")) {
			url = "https://api.github.com/gists";
		}
		//Haetaan kaikkien käyttäjien julkisia gistejä uusimmista vanhimpiin
		else if(fetchMethod.equals("all")) {
			url = "https://api.github.com/gists/public?page=1&per_page=100";
		}
		//Haetaan haettavan käyttäjän julkiset gistit
		else if(fetchMethod.equals("search")) {
			String searchTarget = "Pordi";
			url = "https://api.github.com/users/" + searchTarget + "/gists";
		}
		

		responseContent = connection.formConnection("GET", url, "", accessToken);
		return parse.parseJSON(responseContent[2]);
	
	}
	
	
	//Haetaan haettavan käyttäjän julkiset gistit
	public ArrayList<Gist> searchGistsByUser(String fetchMethod, String searchTarget, String accessToken) {
		String url = "https://api.github.com/users/" + searchTarget + "/gists";
		String[] responseContent = connection.formConnection("GET", url, "", accessToken);
		return parse.parseJSON(responseContent[2]);
	}
	
	
}
