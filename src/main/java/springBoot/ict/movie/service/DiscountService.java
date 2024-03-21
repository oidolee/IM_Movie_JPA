package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.DiscountDTO;

public interface DiscountService {

	// 목록
	public List<DiscountDTO> DiscountList()
		throws ServletException, IOException;
	
	// 등록
	public void DiscountInsert(DiscountDTO dto)
		throws ServletException, IOException;
	
	// 상세페이지
	public DiscountDTO DiscountDetailList(int dc_num)
		throws ServletException, IOException;
	
	// 수정
	public void DiscountUpdate(DiscountDTO dto)
		throws ServletException, IOException;
	
	// 삭제
	public void DiscountDelete(int dc_num)
		throws ServletException, IOException;
}
