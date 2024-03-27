package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="RE_ANSWER")
@Data
public class GroupFormAnswerDTO {
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int group_id_aws;  
    private int  group_id;   
    private String re_title;   
    private String re_con;
    private Date   re_date;
    
    public GroupFormAnswerDTO() {
        // re_date를 현재 날짜로 설정
        this.re_date = new Date(System.currentTimeMillis());
    }
    
}
