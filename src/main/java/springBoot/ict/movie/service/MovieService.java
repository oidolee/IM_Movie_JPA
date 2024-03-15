package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.MovieDTO;

public interface MovieService {

	// 영화목록
		public List<MovieDTO> listMovie()
				throws ServletException, IOException;
		
	// 영화 추가 
	public void insertMovie(MovieDTO dto)
			throws ServletException, IOException;

		
}
