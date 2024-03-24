package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.ParkingDTO;

public interface ParkingService {
	// 목록
	public List<ParkingDTO> ParkingList()
		throws ServletException, IOException;
	
	// 수정
	public void editPark(ParkingDTO dto)
			throws ServletException, IOException;
	
	//삭제
	public void parkDelete(ParkingDTO dto) 
			throws ServletException, IOException;
			

//	// 등록
//	public void savePark(ParkingDTO dto)
//			throws ServletException, IOException;
//	
//	// 상세페이지
//	public DiscountDTO DiscountDetailList(int dc_num)
//			throws ServletException, IOException;
//	

//	
//	// 삭제
//	public void DiscountDelete(int dc_num)
//			throws ServletException, IOException;
}
