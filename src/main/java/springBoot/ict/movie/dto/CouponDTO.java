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
    private String ic_code;
    private String ic_name;
    private String ic_img;
    private String ic_img_detail;
    private String ic_category;
    private int ic_point;
    private String ic_content;
    private Date ic_startDate;
    private Date ic_endDate;
    private Date ic_regDate;
    private String ic_status;
    private String ic_show;
    
    public CouponDTO() {
        // ic_regDate를 현재 날짜로 설정
        this.ic_regDate = new Date(System.currentTimeMillis());
        this.ic_status = "y";
        this.ic_show = "y";
    }
}
