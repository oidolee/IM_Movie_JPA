package springBoot.ict.movie.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import springBoot.ict.movie.dto.MovieDTO;

public interface MovieRepository extends JpaRepository<MovieDTO, Integer> {

	@Query("SELECT u FROM MovieDTO u WHERE u.movie_id=:movie_id")
	MovieDTO MovieDetailList(@Param("movie_id") int movie_id);

	

	 
}
