package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.SeatDTO;

public interface SeatRepository extends JpaRepository<SeatDTO, Integer>{
	
	 @Query("SELECT s FROM SeatDTO s WHERE s.st_id=:st_id")
	 SeatDTO SeatDetailList(@Param("st_id") int st_id);
	
}
