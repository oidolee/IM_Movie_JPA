package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.ArteMovieDTO;


public interface ArteMovieService {

	// 영화목록
		public List<ArteMovieDTO> listMovie()
				throws ServletException, IOException;
}
