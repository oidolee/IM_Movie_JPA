package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@Table(name="IM_Reservation")
@Data
public class ReservationDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int res_id;
    private int st_id;
    @JsonProperty("ic_email")
    private String IC_Email;    
    private int res_count;
    private int res_ticket_price;
    private Date res_sysdate;
    private String res_check;
}
