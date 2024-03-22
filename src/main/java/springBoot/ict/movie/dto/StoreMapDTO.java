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
@Table(name="IM_STORE_TICKETMAP")
@Data
public class StoreMapDTO {

    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    @JsonProperty("ticketmap_no")
    private int ticketmap_no;
    // setGift_num 메서드 추가
    public void setItem_code(int ticketmap_no) {
        this.ticketmap_no = ticketmap_no;
    }
    @JsonProperty("ticketmap_address")
    private String ticketmap_address;
    @JsonProperty("ticketmap_name")
    private String ticketmap_name;
    @JsonProperty("ticketmap_latitude")
    private double ticketmap_latitude;
    @JsonProperty("ticketmap_longitude")
    private double ticketmap_longitude;
    @JsonProperty("ticketmap_category")
    private int ticketmap_category;
    
}