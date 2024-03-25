package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.MoviePlaceDTO;
import springBoot.ict.movie.dto.ReservationDTO;

public interface ReservationService {

	// 지역에 해당하는 영화 목록
	public List<MoviePlaceDTO> ReservationList()
		throws ServletException, IOException;
	
	// 지역에 해당하는 영화 목록
	public void ReservationInsert(ReservationDTO dto)
		throws ServletException, IOException;
}
