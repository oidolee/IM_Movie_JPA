package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.SeatDTO;

public interface SeatService {
	
	// 예약 가능한 목록
	public List<SeatDTO> SeatList()
		throws ServletException, IOException;
		
	// 좌석 선택 후 예매하기 클릭 시 상태 변경 'r'
	public void SeatUpdate(SeatDTO dto)
		throws ServletException, IOException;
	
	// 1건 좌석 조회
	public SeatDTO SeatDetailList(int st_id)
		throws ServletException, IOException;
	
}
