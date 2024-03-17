package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.NextMovieDTO;


public interface NextMovieRepository extends JpaRepository<NextMovieDTO, Integer> {

}
