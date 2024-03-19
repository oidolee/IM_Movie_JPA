package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="im_place")
@Data
public class MoviePlaceDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int ip_num;
    private String place_num;
    private String movie_title;
    private Date   place_title;
    private String theater_id;
    private String start_time;
    private String end_time;
    private String open_time;
    private String close_time;
}
