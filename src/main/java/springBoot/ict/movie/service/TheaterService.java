package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.CouponCusDTO;
import springBoot.ict.movie.dto.CouponDTO;
import springBoot.ict.movie.dto.TheaterDTO;

public interface TheaterService {
	
	// 영화관 등록 
	public TheaterDTO insertTheater(TheaterDTO tdto)
			throws ServletException, IOException;
	
	// 영화관 수정
	public TheaterDTO updateTheater(TheaterDTO tdto)
			throws ServletException, IOException;

	// 영화관 상세내역
	public Optional<TheaterDTO> selectTheater(String c_email)
			throws ServletException, IOException;
	
}
