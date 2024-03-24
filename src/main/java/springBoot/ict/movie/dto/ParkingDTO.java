package springBoot.ict.movie.dto;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Data
@Entity
@Table(name = "im_parking")
@DynamicUpdate
public class ParkingDTO {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ip_no;
    
    @Column(updatable = false)
    private String ip_block;
    @Column(updatable = false)
    private int ip_number; 
    private String ip_carnumber;
    private char ip_inoutcheck = 'N'; // Default value set to 'N'
    private char ip_reservation = 'N'; // Default value set to 'N'
    private String ip_client;
    @Column(nullable = true)
    private Timestamp ip_regdate;
    @Column(nullable = true)
    private Timestamp in_date;
    @Column(nullable = true)
    private Timestamp out_date;
    
    @PreUpdate
    public void preUpdate() {
        // ip_regdate 값이 null인 경우에만 업데이트를 수행합니다.
//        if (ip_regdate == null) {
//            ip_regdate = new Timestamp(System.currentTimeMillis());
//        }
//        
//        if (in_date == null) {
//        	in_date = new Timestamp(System.currentTimeMillis());
//        }
//        
//        if (out_date == null) {
//        	out_date = new Timestamp(System.currentTimeMillis());
//        }
    }
}
