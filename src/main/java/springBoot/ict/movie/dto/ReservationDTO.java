package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="IM_Reservation")
@Data
public class ReservationDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int res_id;
    private int movie_id;
    private String place_code;
    private int st_id;
    private String theater_id;
    private int screen_id;
    private String place_name;
    private String time_date;
    private String c_email;    
    private String movie_age;
    private String res_movie_id;
    private String res_movie_name;
    private String res_movie_time;
    private Date start_time;
    private Date end_time;
    private int res_count;
    private int res_ticket_price;
    private Date res_sysdate;
    private String res_check;    
}
