package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@Table(name="IM_Customer")
@Data
public class CustomerDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int IC_No;
    @JsonProperty
    private String IC_email;
    @JsonProperty
    private String IC_name;
    @JsonProperty
    private String IC_password;
    @JsonProperty
    private String IC_hp;
    @JsonProperty
    private Date IC_birthday;
    @JsonProperty
    private String IC_address;
    @JsonProperty
    private Date IC_regdate;
    @JsonProperty
    private String IC_show;
    
    
}
