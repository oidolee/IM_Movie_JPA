package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import springBoot.ict.movie.dto.DiscountDTO;

public interface DiscountRepository extends JpaRepository<DiscountDTO, Integer> {

	
	
}
