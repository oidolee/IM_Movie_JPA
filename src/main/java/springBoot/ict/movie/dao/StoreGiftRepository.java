package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.StoreGiftDTO;

public interface StoreGiftRepository extends JpaRepository<StoreGiftDTO, Integer>{
	

}
