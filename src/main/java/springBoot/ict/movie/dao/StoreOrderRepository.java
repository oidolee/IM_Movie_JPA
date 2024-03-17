package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.StoreOrderDTO;

public interface StoreOrderRepository extends JpaRepository<StoreOrderDTO, Integer>{
	

}
