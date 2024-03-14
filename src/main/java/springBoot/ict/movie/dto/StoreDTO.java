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
    @JsonProperty("itemCode")
    private int item_code;
    // setGift_num 메서드 추가
    public void setItem_code(int item_code) {
        this.item_code = item_code;
    }
    @JsonProperty("itemType")
    private String item_type;
    @JsonProperty("itemName")
    private String item_name;
    @JsonProperty("itemDetail")
    private String item_detail;
    @JsonProperty("itemPrice")
    private int item_price;
    @JsonProperty("itemSalePrice")
    private int item_sale_price;
    @JsonProperty("itemImage")
    private String item_image;
    @JsonProperty("itemExp")
    private String item_exp;
}