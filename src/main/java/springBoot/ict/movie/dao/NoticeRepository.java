package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.NoticeDTO;


public interface NoticeRepository extends JpaRepository<NoticeDTO, Integer> {

	@Query("SELECT u FROM NoticeDTO u WHERE u.notice_num=:notice_num")
	NoticeDTO getNoticeDetail(@Param("notice_num") int notice_num);
}
