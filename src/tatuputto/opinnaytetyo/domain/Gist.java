package tatuputto.opinnaytetyo.domain;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;

public class Gist {
	private String id;
	private String description;
	private String url;
	private User owner;
	private boolean isOwnedByCurrentUser;
	private String createdAt;
	private ArrayList<GistFile> files;
	private String lastUpdated;
	//TODO hae tarkemmat tiedot: omistaja, luonti/p�ivitys aika, lyhennetty yms.
	
	
	public Gist(String id, String description, String url,
			ArrayList<GistFile> files) {
		this.id = id;
		this.description = description;
		this.url = url;
		this.files = files;
	}
	
	public Gist(String id, String description, String url, User owner, 
			String createdAt, ArrayList<GistFile> files) {
		setCreatedAt(createdAt);
		this.id = id;
		this.description = description;
		this.url = url;
		this.owner = owner;
		this.createdAt = getCreatedAt();
		this.files = files;
	}
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

	public User getOwner() {
		return owner;
	}
	public void setOwner(User owner) {
		this.owner = owner;
	}

	public boolean isOwnedByCurrentUser() {
		return isOwnedByCurrentUser;
	}
	public void setOwnedByCurrentUser(boolean isOwnedByCurrentUser) {
		this.isOwnedByCurrentUser = isOwnedByCurrentUser;
	}

	public String getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(String createdAt) {
		String formattedDate = createdAt.replace("T", ",").replace("Z", "");
		String dateTime[] = formattedDate.split(",");
		
		try {
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");	
			Date myDate = dateFormat.parse(dateTime[0]);
			
			dateFormat.applyPattern("dd.MM.yyyy");
			String myDateString = dateFormat.format(myDate);
			
			
			this.createdAt = myDateString + ", " + 
					dateTime[1].substring(0, dateTime[1].length() - 3);
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public ArrayList<GistFile> getFiles() {
		return files;
	}
	public void setFiles(ArrayList<GistFile> files) {
		this.files = files;
	}

	
	public String toString() {
		return "ID: " + this.id + "\nKuvaus: " + this.description + "\nTiedostot: " + this.files;  
	}
	
}
