package springBoot.ict.movie.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="IM_Customer")
@Builder
@Data
public class User {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int no;
    @JsonProperty("id")
    private String id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("password")
    private String password;
    @JsonProperty("hp")
    private String hp;
    @JsonProperty("birthday")
    private Date birthday;
    @JsonProperty("address")
    private String address;
    @JsonProperty("regdate")
    private Date regdate;
    @JsonProperty("state")
    private String state;
    @JsonProperty("type")
    private String type;
    private String socialId;
    private String role;
        
    private String token;
    
    
    public User (String userId, String email, String name, String type) {
    	this.id = userId;
    	this.socialId = userId;
    	this.name = name;
    	this.password = "Password";
    	this.type = type;
    	this.role = "ROLE_USER";
    	this.regdate = new Date();
    	this.state = "y";
    			
    			
    }
    
    
}
