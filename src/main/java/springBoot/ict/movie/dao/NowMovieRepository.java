package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import springBoot.ict.movie.dto.NowMovieDTO;

public interface NowMovieRepository extends JpaRepository<NowMovieDTO, Integer> {

}
