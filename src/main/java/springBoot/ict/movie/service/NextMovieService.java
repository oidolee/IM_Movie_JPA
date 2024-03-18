package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.NextMovieDTO;


public interface NextMovieService {
	
	// 영화목록
	public List<NextMovieDTO> listMovie()
			throws ServletException, IOException;

}
