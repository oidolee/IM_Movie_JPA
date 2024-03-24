package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.ParkingDTO;

public interface ParkingRepository extends JpaRepository<ParkingDTO, Integer> {
//
//    @Query("SELECT d FROM DiscountDTO d WHERE d.dc_num=:dc_num")
//    DiscountDTO DiscountDetailList(@Param("dc_num") int dc_num);
	
//	  @Modifying
//      @Query("UPDATE ParkingDTO p SET p.ip_regdate = :ipRegdate WHERE p.ip_no = :ipNo")
//	  void updateIpRegdate(@Param("ipNo") int ipNo, @Param("ipRegdate") Timestamp ipRegdate);
}
