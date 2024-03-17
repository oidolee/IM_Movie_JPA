package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.StoreOrderDetailDTO;



public interface StoreOrderDetailRepository extends JpaRepository<StoreOrderDetailDTO, Integer>{
	

}
