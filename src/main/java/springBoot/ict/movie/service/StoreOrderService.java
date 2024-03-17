package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.StoreOrderDTO;

public interface StoreOrderService {

	// 스토어 주문 목록
	public List<StoreOrderDTO> listStoreOrder()
			throws ServletException, IOException;
	
	// 스토어 주문 등록
	public void insertStoreOrder(StoreOrderDTO dto)
			throws ServletException, IOException;	
	
	// 스토어 주문 수정
	public void updateStoreOrder(StoreOrderDTO dto)
			throws ServletException, IOException;		
	
	// 스토어 주문 삭제
	public void deleteStoreOrder(int order_code)
			throws ServletException, IOException;	
	
	// 스토어 주문  상세페이지
	public StoreOrderDTO findById(int order_code)
			throws ServletException, IOException;	
	
}
