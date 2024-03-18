package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.NextMovieDTO;



public interface NextMovieRepository extends JpaRepository<NextMovieDTO, Integer> {
	
	@Query("SELECT u FROM NextMovieDTO u WHERE u.next_id=:next_id")
	NextMovieDTO NextDetailList(@Param("next_id") int next_id);

}
