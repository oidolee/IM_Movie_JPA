package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.ArteMovieDTO;


public interface ArteMovieRepository  extends JpaRepository<ArteMovieDTO, Integer> {
}
