package springBoot.ict.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.MoviePlaceDTO;

public interface MoviePlaceRepository extends JpaRepository<MoviePlaceDTO, Integer> {

    @Query("SELECT p FROM MoviePlaceDTO p WHERE p.place_num = :place_num")
    List<MoviePlaceDTO> findAllByPlaceNum(@Param("place_num") int place_num);
    
}
