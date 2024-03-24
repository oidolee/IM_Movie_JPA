package springBoot.ict.movie.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import springBoot.ict.movie.dto.MoviePlaceDTO;

@Mapper
public interface MoviePlaceMapper {
	List<MoviePlaceDTO> selectAll(MoviePlaceDTO dto);
}
