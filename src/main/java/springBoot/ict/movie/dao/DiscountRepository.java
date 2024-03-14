package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.DiscountDTO;

public interface DiscountRepository extends JpaRepository<DiscountDTO, Integer> {

    @Query("SELECT d FROM DiscountDTO d WHERE d.dc_num=:dc_num")
    DiscountDTO DiscountDetailList(@Param("dc_num") int dc_num);
    
//    @Modifying
//    @Query("UPDATE DiscountDTO d SET d.dc_main_title=:dto.dc_main_title, d.dc_sub_title=:dto.dc_sub_title, d.dc_main_img=:dto.dc_main_img, d.dc_show=:dto.dc_show} WHERE d.dc_num=:dto.dc_num}")
//    int DiscountUpdate(@Param("dto") DiscountDTO dto);
}
