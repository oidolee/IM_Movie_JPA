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
@Table(name="IM_Discount")
@Data
public class DiscountDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int dc_num;
	@JsonProperty("dc_main_title")
	private String dc_main_title;
	@JsonProperty("dc_sub_title")
	private String dc_sub_title;
	@JsonProperty("dc_main_img")
	private String dc_main_img;
	@JsonProperty("dc_show")
	private String dc_show;
	@JsonProperty("dc_sysdate")
	private Date dc_sysdate;
	
}