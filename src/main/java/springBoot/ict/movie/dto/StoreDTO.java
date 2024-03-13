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
    @Column(name= "item_code")
    private int item_code;
    //@JsonProperty("item_type")
	@Column(name= "item_type")
    private String item_type;
    //@JsonProperty("item_name")
	@Column(name= "item_name")
    private String item_name;
    //@JsonProperty("item_detail")
	@Column(name= "item_detail")
    private String item_detail;
    //@JsonProperty("item_price")
	@Column(name= "item_price")
    private int item_price;
    //@JsonProperty("item_sale_price")
	@Column(name= "item_sale_price")
    private int item_sale_price;
    //@JsonProperty("item_image")
	@Column(name= "item_image")
    private String item_image;
    //@JsonProperty("item_exp")
	@Column(name= "item_exp")
    private String item_exp;
}
