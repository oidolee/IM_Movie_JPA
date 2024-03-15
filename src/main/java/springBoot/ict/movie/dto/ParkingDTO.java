package springBoot.ict.movie.dto;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "im_parking")
@Data
public class ParkingDTO {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ip_no;
    
    private String ip_block; 
    private int ip_number; 
    private String ip_carnumber;
    private char ip_inoutcheck = 'N'; // Default value set to 'N'
    private String ip_client;
    private Timestamp ip_regdate; 
    private Timestamp out_date;
    
    @PrePersist
    public void prePersist() {
        ip_regdate = new Timestamp(System.currentTimeMillis());
    }
}
