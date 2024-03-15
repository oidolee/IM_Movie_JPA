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
@Table(name="IM_BOARD")
@Data
public class ConsultDTO {
    
    
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int one_id;
    @JsonProperty("c_email")
    private String c_email;
    @JsonProperty("cus_name")
    private String cus_name;
    @JsonProperty("ib_type")
    private String ib_type;
    @JsonProperty("ib_type_detail")
    private String ib_type_detail;
    @JsonProperty("ib_title")
    private String ib_title;
    @JsonProperty("ib_content")
    private String ib_content;
    @JsonProperty("ib_date")
    private Date ib_date;
    @JsonProperty("ib_show")
    private String ib_show;
    
    
    public ConsultDTO() {
        // ib_date를 현재 날짜로 설정
        this.ib_date = new Date(System.currentTimeMillis());
        // ib_show를 기본값으로 설정
        this.ib_show = "y";
    }
    
}
