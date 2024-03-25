package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.MoviePlaceRepository;
import springBoot.ict.movie.dao.ReservationRepository;
import springBoot.ict.movie.dto.MoviePlaceDTO;
import springBoot.ict.movie.dto.ReservationDTO;

@Service
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	private MoviePlaceRepository dao1;
	
	@Autowired
	private ReservationRepository dao;
	
	@Override
	// 지역에 해당하는 영화 목록
	public List<MoviePlaceDTO> ReservationList() 
		throws ServletException, IOException {
		
		System.out.println("ReservationServiceImpl - ReservationList");
		
		System.out.println(dao1.findAll());
		
		return dao1.findAll();
	}

	@Override
	public void ReservationInsert(ReservationDTO dto) 
		throws ServletException, IOException {
		
		System.out.println("ReservationServiceImpl - ReservationInsert");
		
		System.out.println(dao.save(dto));
		
		dao.save(dto);
	}
	


}
