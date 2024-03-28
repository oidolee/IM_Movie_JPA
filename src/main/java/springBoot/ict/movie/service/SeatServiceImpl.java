package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.SeatRepository;
import springBoot.ict.movie.dto.SeatDTO;

@Service
public class SeatServiceImpl implements SeatService {

	@Autowired
	private SeatRepository dao;
	
	// 예약 가능한 목록
	@Override
	public List<SeatDTO> SeatList() 
		throws ServletException, IOException {
		
		System.out.println("SeatServiceImpl - SeatList");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}
	
	// 좌석 선택 후 예매하기 클릭 시 상태 변경 'r'
	public void SeatUpdate(SeatDTO dto)
			throws ServletException, IOException {
		
		System.out.println("SeatServiceImpl - SeatUpdate");
		
		System.out.println(dao.findAll());
		
	    dao.save(dto);
	}

	// 1건 좌석 조회
	@Override
	public SeatDTO SeatDetailList(int st_id) 
		throws ServletException, IOException {
		
		System.out.println("SeatServiceImpl - SeatDetailList");
		
		SeatDTO dto = dao.SeatDetailList(st_id);
		
		System.out.println(st_id);	
		System.out.println(dto);
		
		return dto;
	}
	

}
