package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="now_movie")
@Data
public class NowMovieDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int now_id;
    private String now_image;
    private String now_title;
    private Date   now_date;
    private String now_time;
    private String now_age;
    private String now_visitor;
    private String now_contents;
    private String now_con;
    private String now_trailer;
    private String now_category;
}
