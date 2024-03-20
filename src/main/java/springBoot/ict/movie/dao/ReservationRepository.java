package springBoot.ict.movie.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.ReservationDTO;

public interface ReservationRepository extends JpaRepository<ReservationDTO, Integer> {

//    // 지역에 해당하는 영화 목록
//	@Query("SELECT m.mov_image, m.mov_title, m.mov_date, m.mov_age, p.theater_id, p.start_time, p.end_time, p.open_time, p.close_time " + 
//			"FROM im_movie m INNER JOIN im_place p " + 
//			"ON m.mov_id = p.movie_id")
//	List<ReservationDTO> ReservationList();
	
}
