package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.NowMovieDTO;

public interface NowMovieRepository extends JpaRepository<NowMovieDTO, Integer> {


	@Query("SELECT u FROM NowMovieDTO u WHERE u.now_id=:now_id")
	NowMovieDTO NowDetailList(@Param("now_id") int now_id);
}
