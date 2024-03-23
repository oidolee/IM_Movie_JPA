package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="NOTICE_BOARD")
@Data
public class NoticeDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    
    private int    notice_num;
    private String notice_one;
    private String notice_title;
    private Date   notice_date;
    private int    notice_cnt;
    private String notice_con;
}
