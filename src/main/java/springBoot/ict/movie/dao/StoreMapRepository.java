package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.StoreMapDTO;

public interface StoreMapRepository extends JpaRepository<StoreMapDTO, Integer>{
	

}
