package springBoot.ict.movie.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import springBoot.ict.movie.dto.GroupFormAnswerDTO;
import springBoot.ict.movie.dto.GroupFormDTO;

public interface GroupFormAnswerRepository extends JpaRepository<GroupFormAnswerDTO, Integer> {

	// 1:1문의 답변 리스트
		@Query("SELECT ca FROM GroupFormAnswerDTO ca WHERE ca.group_id = :group_id")
	List<GroupFormAnswerDTO> selectGroup(int group_id);
}
