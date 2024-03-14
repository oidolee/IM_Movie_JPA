package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import springBoot.ict.movie.dto.DiscountDTO;

public interface DiscountRepository extends JpaRepository<DiscountDTO, Integer> {

	@Query("SELECT d FROM DiscountDTO d WHERE d.dc_num=:dc_num")
	DiscountDTO DiscountDetailList(int dc_num);
	
//	@Query("SELECT d FROM DiscountDTO d WHERE d.dc_num=:dc_num")
//	int DiscountUpdate(DiscountDTO dto);
	
//	@Query("UPDATE DiscountDTO d SET d.dc_show='n' WHERE d.dc_num=:dc_num")
//	void DiscountDelete(int dc_num);
	
//	@Modifying
//	@Query("DELETE FROM DiscountDTO WHERE dc_num=:dc_num")
//	int DiscountDelete(int dc_num);
	
}
