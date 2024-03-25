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
@Table(name="IM_STORE_ORDER")
@Data
public class StoreOrderDTO {

    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    @JsonProperty("orderCode")
    private int order_code;
    // setGift_num 메서드 추가
    public void setItem_code(int order_code) {
        this.order_code = order_code;
    }
    @JsonProperty("email") // 이메일 코드 맞는지 확인!!!!
    private String c_email;
}