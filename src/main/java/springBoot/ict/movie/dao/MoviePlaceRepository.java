package springBoot.ict.movie.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.MoviePlaceDTO;

public interface MoviePlaceRepository extends JpaRepository<MoviePlaceDTO, Integer>{

	@Query("SELECT p FROM MoviePlaceDTO p WHERE p.ip_num=:ip_num")
	MoviePlaceDTO MovieDetailList(@Param("ip_num") int ip_num);

	List<MoviePlaceDTO> findAll();

}
