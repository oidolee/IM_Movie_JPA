package springBoot.ict.movie.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@Table(name="IM_STORE_ITEM")
@Data
public class StoreDTO {

	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    
    //@JsonProperty("item_code")
    @Column(name= "subscribe_num")
    private int item_code;
    //@JsonProperty("item_type")
	@Column(name= "subscribe_num")
    private String item_type;
    //@JsonProperty("item_name")
	@Column(name= "subscribe_num")
    private String item_name;
    //@JsonProperty("item_detail")
	@Column(name= "subscribe_num")
    private String item_detail;
    //@JsonProperty("item_price")
	@Column(name= "subscribe_num")
    private int item_price;
    //@JsonProperty("item_sale_price")
	@Column(name= "subscribe_num")
    private int item_sale_price;
    //@JsonProperty("item_image")
	@Column(name= "subscribe_num")
    private String item_image;
    //@JsonProperty("item_exp")
	@Column(name= "subscribe_num")
    private String item_exp;
}
