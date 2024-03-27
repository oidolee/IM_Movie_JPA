package springBoot.ict.movie.dto;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@Table(name="IM_STORE_ORDER_DETAIL")
@Data
public class StoreOrderDetailDTO {

    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    @JsonProperty("detailCode")
    private int detail_code;
    // setGift_num 메서드 추가
    public void setItem_code(int detail_code) {
        this.detail_code = detail_code;
    }
//    @JsonProperty("orderCode")
//    private String order_code;
    @JsonProperty("itemCode")
    private int item_code;   
    @JsonProperty("itemName")
    private String item_name;
    @JsonProperty("totalPrice")
    private String detail_price;
    @JsonProperty("totalQuantity")
    private int detail_qty;
    @JsonProperty("detailRegDate")
    private Date detail_regDate;
    
    @PreUpdate
    public void preUpdate() {
         //ip_regdate 값이 null인 경우에만 업데이트를 수행합니다.
    	 if (detail_regDate == null) {
    		 detail_regDate = new Date(); // 현재 날짜로 설정
         }
    }
}