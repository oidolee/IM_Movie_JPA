package springBoot.ict.movie.dto;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="IM_PLACE")
@Data
public class MoviePlaceDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int ip_num;
    private int place_num;
    private int movie_id;
    private String movie_title;
    private String   place_title;
    private String theater_id;
    private String movie_time;
    private String start_time;
    private Timestamp end_time;
    private Timestamp open_time;
    private Timestamp close_time;
}
