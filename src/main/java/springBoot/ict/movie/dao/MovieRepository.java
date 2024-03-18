package springBoot.ict.movie.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import springBoot.ict.movie.dto.MovieDTO;

public interface MovieRepository extends JpaRepository<MovieDTO, Integer> {

	@Query("SELECT u FROM MovieDTO u WHERE u.mov_id=:mov_id")
	MovieDTO MovieDetailList(@Param("mov_id") int mov_id);

	

	 
}
