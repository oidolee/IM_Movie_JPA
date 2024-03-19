package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import springBoot.ict.movie.dto.ReviewDTO;

public interface ReviewRepository extends JpaRepository<ReviewDTO, Integer> {
   
}
