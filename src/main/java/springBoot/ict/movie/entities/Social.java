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
@Table(name="IM_SocialCustomer")
@Builder
@Data
public class Social {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int no;
    @JsonProperty("id")
    private String id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("hp")
    private String hp;
    @JsonProperty("regdate")
    private Date regdate;
    @JsonProperty("state")
    private String state;
    private String type;
    private String socialId;
    private String role;
        
    
    
    public Social (String userId, String email, String name, String type) {
    	this.socialId = userId;
    	this.id = userId;
    	this.name = name;
    	this.role = "ROLE_USER";
    	this.regdate = new Date();
    	this.state = "y";
    	this.socialId = email;
    	this.type = type;
    			
    			
    }
    
    
}
