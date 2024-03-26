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
//    private String gift_num;
//  public void setGift_num(String gift_num) {
//  this.gift_num = gift_num;
//}
    
    // setGift_num 메서드 추가
    private int gift_num;
    public void setItem_code(int gift_num) {
        this.gift_num = gift_num;
    }
    
//    @JsonProperty("itemCode")
//    private int item_code;   
    @JsonProperty("itemName")
    private String item_name;      
    @JsonProperty("recipientNumber")
    private String gift_recipient;
    @JsonProperty("userName")
    private String gift_name;
    @JsonProperty("message")
    private String gift_content;
    @JsonProperty("totalQuantity")
    private int gift_count;
}