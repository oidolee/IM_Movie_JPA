package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="GROUP_BOARD") // 생략시 table or view not found
@Data
public class GroupFormDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
	private int     group_id; //아이디(PK)
	private String  c_email;  //고객 아이디값
	private String  group_loc; //영화관위치
	private String  group_type; //분류
	private int     group_expeople; //예상인원
	private Date    group_date; //희망일
	private int     group_time1; //희망시간
	private int     group_time2; //희망시간
	private String  group_movtitle; //영화제목
	private String  group_title; //제목
	private String  group_con; //내용
	private String  group_name; //단체명
	private String  custo_name; //신청고객명 
	private String  custo_phone1; //연락처
	private String  custo_phone2; //연락처
	private String  custo_phone3; //연락처
	private Date    now_grdate; //희망일
	private String  gr_show;     //답변완료 상태
	
	 public GroupFormDTO() {
	        // ib_date를 현재 날짜로 설정
	        this.now_grdate = new Date(System.currentTimeMillis());
	        // ib_show를 기본값으로 설정
	        this.gr_show = "y";
	    }
}
