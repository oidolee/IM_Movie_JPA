package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springBoot.ict.movie.dao.CouponCusRepository;
import springBoot.ict.movie.dao.CouponRepository;
import springBoot.ict.movie.dao.TheaterRepository;
import springBoot.ict.movie.dto.CouponCusDTO;
import springBoot.ict.movie.dto.CouponDTO;
import springBoot.ict.movie.dto.TheaterDTO;

@Service
public class TheaterServiceImpl implements TheaterService {

	@Autowired
	private TheaterRepository tdao;

	// 영화관 등록
	@Override
	public TheaterDTO insertTheater(TheaterDTO tdto) 
			throws ServletException, IOException {

		return tdao.save(tdto);
	}

	//영화관 수정
	@Override
	public TheaterDTO updateTheater(TheaterDTO tdto) 
			throws ServletException, IOException {

		return tdao.save(tdto);
	}
	
	// 고객 영화관 상세정보
	@Override
	public Optional<TheaterDTO> selectTheater(String c_email) 
			throws ServletException, IOException {

		return tdao.selectTheater(c_email);
	}

	
}
