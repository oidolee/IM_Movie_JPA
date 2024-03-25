package springBoot.ict.movie.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import springBoot.ict.movie.dto.MoviePlaceDTO;

import java.util.List;

@Mapper
public interface MoviePlaceMapper {

	@Select("<script>" +
	        "SELECT * FROM IM_PLACE " +
	        "WHERE place_num = #{place_num} " +
	        "AND open_time &lt; #{open_time} " +
	        "AND close_time &gt; #{close_time}" +
	        "</script>")
	List<MoviePlaceDTO> selectAll(MoviePlaceDTO dto);

}

