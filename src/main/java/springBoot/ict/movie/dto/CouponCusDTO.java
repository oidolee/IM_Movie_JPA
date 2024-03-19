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
@Table(name="IM_CUS_COUPON")
@Data
public class CouponCusDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int ic_num;			
    private String c_email;
    private int ic_code;
    private String ic_name;
    private String ic_category;
    private int ic_point;
    private Date ic_useDate;
    private Date ic_regDate;
    private String ic_status;
    
    public CouponCusDTO() {
        // ic_regDate를 현재 날짜로 설정
        this.ic_regDate = new Date(System.currentTimeMillis());
        this.ic_status = "y";
    }
}
