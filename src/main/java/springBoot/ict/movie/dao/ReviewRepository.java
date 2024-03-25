package springBoot.ict.movie.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import springBoot.ict.movie.dto.ReviewDTO;

public interface ReviewRepository extends JpaRepository<ReviewDTO, Integer> {
    // @Query 애너테이션을 사용하여 직접 SQL 쿼리를 작성
    @Query("SELECT r FROM ReviewDTO r WHERE r.movie_id = :movie_id")
    List<ReviewDTO> findReviewsByMovieId(String movie_id);
}
