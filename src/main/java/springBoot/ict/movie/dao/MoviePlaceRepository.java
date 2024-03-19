package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.MoviePlaceDTO;

public interface MoviePlaceRepository {

	@Query("SELECT p FROM MoviePlaceDTO p WHERE p.ip_num=:ip_num")
	MoviePlaceDTO MovieDetailList(@Param("ip_num") int ip_num);

}
