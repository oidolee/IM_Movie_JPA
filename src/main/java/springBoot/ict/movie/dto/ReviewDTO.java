package springBoot.ict.movie.dto;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="im_review")
@Data
public class ReviewDTO {
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int review_num;    
    private String movie_id;
    private String cus_id;
    private int review_star;
    private String review_contents;
    private Timestamp review_date;
    
    @PrePersist
    protected void onCreate() {
        review_date = Timestamp.valueOf(LocalDateTime.now());
    }
}