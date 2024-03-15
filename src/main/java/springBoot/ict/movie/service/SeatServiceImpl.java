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
	public void SeatUpdate(int st_id, String st_check, String st_row, String st_column)
			throws ServletException, IOException {
		
		Optional<SeatDTO> optionalSeat = dao.findById(st_id);
	    if (optionalSeat.isPresent()) {
	        SeatDTO seat = optionalSeat.get();
	        seat.setSt_check(st_check);
	        dao.save(seat);
	    }
	}
	

}
