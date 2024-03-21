package springBoot.ict.movie.dao;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="IM_PayMent")
@Data
public class PaymentDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private int pay_id;
	private int res_id;
	private int IC_No;	
	private String IC_Email;
	private String pay_method;
	private String pay_name;
	private int pay_amount;
	private String pay_company;
	private String pay_card_num;
	private String pay_tel;
	private String pay_fail_reason;
	private String pay_cancel_reason;
	private String pay_check;
	private String pay_cancel;
	private Date pay_sysdate;
}