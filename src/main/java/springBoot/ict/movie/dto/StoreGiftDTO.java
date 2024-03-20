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
@Table(name="IM_STORE_GIFT")
@Data
public class StoreGiftDTO {

    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    @JsonProperty("giftNum")
    private int gift_num;
    // setGift_num 메서드 추가
    public void setItem_code(int gift_num) {
        this.gift_num = gift_num;
    }
    
    @JsonProperty("itemCode")
    private String item_code;   
    @JsonProperty("itemName")
    private String item_name;      
    @JsonProperty("recipient")
    private String gift_recipient;
    @JsonProperty("sender")
    private String gift_name;
    @JsonProperty("message")
    private String gift_content;
    @JsonProperty("totalQuantity")
    private int gift_count;
}