package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.StoreOrderDetailDTO;

public interface StoreOrderDetailService {

	// 스토어 주문 목록
	public List<StoreOrderDetailDTO> listStoreOrderDetail()
			throws ServletException, IOException;
	
	// 스토어 주문 등록
	public void insertStoreOrderDetail(StoreOrderDetailDTO dto)
			throws ServletException, IOException;	
	
	// 스토어 주문 수정
	public void updateStoreOrderDetail(StoreOrderDetailDTO dto)
			throws ServletException, IOException;		
	
	// 스토어 주문 삭제
	public void deleteStoreOrderDetail(int detail_code)
			throws ServletException, IOException;	
	
	// 스토어 주문  상세페이지
	public StoreOrderDetailDTO findById(int detail_code)
			throws ServletException, IOException;	
	
}
