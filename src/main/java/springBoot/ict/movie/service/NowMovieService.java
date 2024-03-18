package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;


import springBoot.ict.movie.dto.NowMovieDTO;

public interface NowMovieService {

	// 영화목록
	public List<NowMovieDTO> listMovie()
		throws ServletException, IOException;
}
