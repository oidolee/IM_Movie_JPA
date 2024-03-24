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
@Table(name="IM_PayMent")
@Data
public class PaymentDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
    private int pay_id;
	private String pay_name;
	private String pay_order_name;
    // private int res_id;
    @JsonProperty("ic_email")
    private String IC_Email;
    private long pay_amount;
    private String pay_company;
    private String pay_check;
    private Date pay_sysdate;
}