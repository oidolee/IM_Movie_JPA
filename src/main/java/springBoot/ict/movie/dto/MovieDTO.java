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
@Table(name="IM_MOVIE")
@Data
public class MovieDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    
    private int movie_id;
    private String mov_image;
    private String mov_title;
    private Date   mov_date;
    private String mov_time;
    private String mov_age;
    private String mov_visitor;
    private String mov_contents;
    private String mov_con;
    private String mov_pd;
    private String mov_cast;
    private String mov_image2;
    private String mov_image3;
    private String mov_trailer1;
    private String mov_trailer2;
    private String mov_category;
}
