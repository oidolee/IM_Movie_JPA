package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.SeatDTO;

public interface SeatRepository extends JpaRepository<SeatDTO, Integer>{
	
	
	
}
