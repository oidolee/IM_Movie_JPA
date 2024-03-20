package springBoot.ict.movie.dto;

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
	private String c_email;
	private String c_grade;
	private String pay_method;
	private String pay_company;
	private String pay_card_num;
	private String pay_tel;
	private Date pay_sysdate;
	private String pay_check;
}
