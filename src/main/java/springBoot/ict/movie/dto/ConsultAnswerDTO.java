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
    
    private int one_id;
    
    private String iba_content;
    
    private Date iba_date;
   
    
    public ConsultAnswerDTO() {
        // ib_date를 현재 날짜로 설정
        this.iba_date = new Date(System.currentTimeMillis());
    }
}
