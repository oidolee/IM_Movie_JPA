package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.MovieDTO;

public interface MovieRepository extends JpaRepository<MovieDTO, Integer> {

}
