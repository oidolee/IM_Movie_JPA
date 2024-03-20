package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.ReservationRepository;
import springBoot.ict.movie.dto.ReservationDTO;

@Service
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	private ReservationRepository dao;
	
//	@Override
//	// 지역에 해당하는 영화 목록
//	public List<ReservationDTO> ReservationList() 
//		throws ServletException, IOException {
//		
//		System.out.println("ReservationServiceImpl - ReservationList");
//		
//		List<ReservationDTO> list = dao.ReservationList();
//		
//		return list;
//	}

}
