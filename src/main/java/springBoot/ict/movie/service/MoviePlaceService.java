package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.MoviePlaceDTO;

public interface MoviePlaceService {

	// 상영시간표목록
	public List<MoviePlaceDTO> listTime()
			throws ServletException, IOException;
}
