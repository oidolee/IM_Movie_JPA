package springBoot.ict.movie.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.GroupFormAnswerDTO;
import springBoot.ict.movie.dto.GroupFormDTO;





public interface GroupFormRepositiry extends JpaRepository<GroupFormDTO, Integer>{
	
		@Query("SELECT u FROM GroupFormDTO u WHERE u.c_email = :c_email")
	    List<GroupFormDTO> GroupList(String c_email);
		
		// 1:1 답변 등록 후 상태업데이트
		@Modifying
	    @Query("UPDATE GroupFormDTO c SET c.gr_show = 'n' WHERE c.group_id = :group_id")
	    int updateCusGroupstate (@Param("group_id") int group_id);

		

}