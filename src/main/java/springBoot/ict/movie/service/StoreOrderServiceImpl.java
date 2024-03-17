package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.StoreOrderRepository;
import springBoot.ict.movie.dto.StoreOrderDTO;

@Service
public class StoreOrderServiceImpl implements StoreOrderService {

	@Autowired
	private StoreOrderRepository dao;
	
	// 스토어 주문 목록
	@Override
	public List<StoreOrderDTO> listStoreOrder() throws ServletException, IOException {
		System.out.println("서비스 - listStoreOrder");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 스토어 주문 등록
	@Override
	public void insertStoreOrder(StoreOrderDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - insertStoreOrder");
		
		System.out.println(dto);
		
		dao.save(dto);
	}

	// 스토어 주문 수정
	@Override
	public void updateStoreOrder(StoreOrderDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - updateStoreOrder");
		
    
	    // 저장 또는 업데이트합니다.
	    dao.save(dto);
	}

	// 스토어 주문 삭제
	@Override
	public void deleteStoreOrder(int order_code) throws ServletException, IOException {
		System.out.println("서비스 - deleteStoreOrder");
		
		dao.deleteById(order_code);
	}

	// 스토어 주문 상세페이지
	@Override
	public StoreOrderDTO findById(int order_code) throws ServletException, IOException {
		System.out.println("서비스 - findById");
		
		return dao.findById(order_code).get();
	}

}
