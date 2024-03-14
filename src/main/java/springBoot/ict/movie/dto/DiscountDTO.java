package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="IM_Discount")
@Data
public class DiscountDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int dc_num;
	private String dc_main_title;
	private String dc_sub_title;
	private String dc_content;
	private String dc_main_img;
	private String dc_show;
	private Date dc_sysdate;
}