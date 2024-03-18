package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.ArteMovieDTO;


public interface ArteMovieRepository  extends JpaRepository<ArteMovieDTO, Integer> {
	
	@Query("SELECT u FROM ArteMovieDTO u WHERE u.arte_id=:arte_id")
	ArteMovieDTO ArteDetailList(@Param("arte_id") int arte_id);

}
