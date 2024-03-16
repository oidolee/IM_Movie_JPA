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
@Table(name="IM_COUPON")
@Data
public class CouponDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int ic_num;			
    private int ic_code;
    private String ic_name;
    private int ic_point;
    private Date ic_useDate;
    private Date ic_regDate;
    private String ic_status;
    
    public CouponDTO() {
        // ic_regDate를 현재 날짜로 설정
        this.ic_regDate = new Date(System.currentTimeMillis());
        this.ic_status = "y";
    }
}
