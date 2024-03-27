package springBoot.ict.movie.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@Table(name="IM_MY_THEATER")
@Data
public class TheaterDTO {

    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int it_no;
    private String c_email;
    private String ic_my_theater_1;
    private int ticketmap_no1;
    private String ic_my_theater_2;
    private int ticketmap_no2;
    private String ic_my_theater_3;
    private int ticketmap_no3;
   
}