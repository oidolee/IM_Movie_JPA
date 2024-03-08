package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="IM_Customer")
@Data
public class CustomerDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int IC_No;
    private String IC_email; 
    private String IC_name;
    private String IC_password;
    private String IC_hp;
    private Date IC_birthday;
    private String IC_address;
    private Date IC_regdate;
    private String IC_show;
    
    
}
