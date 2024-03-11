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
@Table(name="IM_BOARD_ANSWER")
@Data
public class ConsultAnswerDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int one_id_answer;
    
    @JsonProperty("iba_title")
    private String iba_title;
    
    @JsonProperty("iba_content")
    private String iba_content;
    
    @JsonProperty("iba_date")
    private Date iba_date;
   
}
