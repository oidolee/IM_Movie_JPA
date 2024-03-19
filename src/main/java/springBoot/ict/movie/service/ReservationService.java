package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.ReservationDTO;

public interface ReservationService {

	// 목록
	public List<ReservationDTO> ReservationList()
		throws ServletException, IOException;
}
