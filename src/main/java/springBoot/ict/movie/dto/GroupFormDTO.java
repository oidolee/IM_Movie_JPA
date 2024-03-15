//package springBoot.ict.movie.dto;
//
//import java.sql.Date;
//import java.sql.Time;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//import lombok.Data;
//
//@Entity
//@Table(name="group_board") // 생략시 table or view not found
//@Data
//public class GroupFormDTO {
//
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//    @Id
//	private int group_num; //대관신청코드(PK)
//	private String cus_id; //영화관위치
//	private String group_loc; //분류
//	private String group_type; //예상인원
//	private int group_pnum; //희망일
//	private Date group_date; //희망일
//	private Time group_time; //희망시간
//	private StringBuffer group_con; //내용
//	private String group_movie_title; //영화제목
//	private String group_title; //제목
//	private String group_name; //단체명
//	private String name; //신청고객명
//	private String group_phone; //연락처
//	
//	
//	//getter setter
//	
//	public int getGroup_num() {
//		return group_num;
//	}
//	public void setGroup_num(int group_num) {
//		this.group_num = group_num;
//	}
//	public String getCus_id() {
//		return cus_id;
//	}
//	public void setCus_id(String cus_id) {
//		this.cus_id = cus_id;
//	}
//	public String getGroup_loc() {
//		return group_loc;
//	}
//	public void setGroup_loc(String group_loc) {
//		this.group_loc = group_loc;
//	}
//	public String getGroup_type() {
//		return group_type;
//	}
//	public void setGroup_type(String group_type) {
//		this.group_type = group_type;
//	}
//	public int getGroup_pnum() {
//		return group_pnum;
//	}
//	public void setGroup_pnum(int group_pnum) {
//		this.group_pnum = group_pnum;
//	}
//	public Date getGroup_date() {
//		return group_date;
//	}
//	public void setGroup_date(Date group_date) {
//		this.group_date = group_date;
//	}
//	public Time getGroup_time() {
//		return group_time;
//	}
//	public void setGroup_time(Time group_time) {
//		this.group_time = group_time;
//	}
//	public StringBuffer getGroup_con() {
//		return group_con;
//	}
//	public void setGroup_con(StringBuffer group_con) {
//		this.group_con = group_con;
//	}
//	public String getGroup_movie_title() {
//		return group_movie_title;
//	}
//	public void setGroup_movie_title(String group_movie_title) {
//		this.group_movie_title = group_movie_title;
//	}
//	public String getGroup_title() {
//		return group_title;
//	}
//	public void setGroup_title(String group_title) {
//		this.group_title = group_title;
//	}
//	public String getGroup_name() {
//		return group_name;
//	}
//	public void setGroup_name(String group_name) {
//		this.group_name = group_name;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getGroup_phone() {
//		return group_phone;
//	}
//	public void setGroup_phone(String group_phone) {
//		this.group_phone = group_phone;
//	}
//	
//	
//	@Override
//	public String toString() {
//		return "GroupFormDTO [group_num=" + group_num + ", cus_id=" + cus_id + ", group_loc=" + group_loc
//				+ ", group_type=" + group_type + ", group_pnum=" + group_pnum + ", group_date=" + group_date
//				+ ", group_time=" + group_time + ", group_con=" + group_con + ", group_movie_title=" + group_movie_title
//				+ ", group_title=" + group_title + ", group_name=" + group_name + ", name=" + name + ", group_phone="
//				+ group_phone + "]";
//	}
//}
