package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.ParkingDTO;
import springBoot.ict.movie.dto.ReviewDTO;

public interface ReviewService {
	// 등록
	public void addReview(ReviewDTO dto)
		throws ServletException, IOException;

	//목록
	public List<ReviewDTO> reviewList(String movie_id);
	
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
