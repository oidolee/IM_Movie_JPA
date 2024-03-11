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
public class ConsultDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int IC_No;
    @JsonProperty("email")
    private String IC_email;
    @JsonProperty("name")
    private String IC_name;
    @JsonProperty("password")
    private String IC_password;
    @JsonProperty("hp")
    private String IC_hp;
    @JsonProperty("birthday")
    private Date IC_birthday;
    @JsonProperty("address")
    private String IC_address;
    @JsonProperty("regdate")
    private Date IC_regdate;
    @JsonProperty("show")
    private String IC_show;
}
