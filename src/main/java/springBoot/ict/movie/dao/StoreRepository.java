package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.StoreDTO;

public interface StoreRepository extends JpaRepository<StoreDTO, Integer>{
	

}
