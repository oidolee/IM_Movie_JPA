package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="NEXT_MOVIE")
@Data
public class NextMovieDTO {
	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int next_id;
    private String next_image;
    private String next_title;
    private Date   next_date;
    private String next_time;
    private String next_age;
    private String next_visitor;
    private String next_contents;
    private String next_con;
    private String next_pd;
    private String next_cast;
    private String next_image2;
    private String next_image3;
    private String next_trailer1;
    private String next_trailer2;
    private String next_category;

}
