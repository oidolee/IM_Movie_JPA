package springBoot.ict.movie.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.GroupFormDTO;





public interface GroupFormRepositiry extends JpaRepository<GroupFormDTO, Integer>{

	@Query("SELECT u FROM GroupFormDTO u WHERE u.group_id=:group_id")
	GroupFormDTO GroupDetailList(@Param("group_id") int group_id);

}