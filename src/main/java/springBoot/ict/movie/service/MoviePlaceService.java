package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.MoviePlaceDTO;
import springBoot.ict.movie.dto.StoreMapDTO;

public interface MoviePlaceService {

	// 상세 상영시간표목록
	public List<MoviePlaceDTO> listTime(int place_num)
			throws ServletException, IOException;
	
	//시간표리스트
	public List<MoviePlaceDTO> listAllTime() 
			throws ServletException, IOException;
			
	
}
