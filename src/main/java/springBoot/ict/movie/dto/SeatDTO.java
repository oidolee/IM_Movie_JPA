package springBoot.ict.movie.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="IM_Seat")
@Data
public class SeatDTO {
	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int st_id;
	private String st_row;
	private String st_column;
	private String st_check;
}