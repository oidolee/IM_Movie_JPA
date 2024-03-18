package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="arte_movie")
@Data
public class ArteMovieDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int arte_id;
    private String arte_image;
    private String arte_title;
    private Date   arte_date;
    private String arte_time;
    private String arte_age;
    private String arte_visitor;
    private String arte_contents;
    private String arte_con;
    private String arte_trailer;
    private String arte_category;
}
