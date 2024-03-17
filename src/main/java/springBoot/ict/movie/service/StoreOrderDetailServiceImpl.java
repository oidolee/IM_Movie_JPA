package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.StoreOrderDetailRepository;
import springBoot.ict.movie.dto.StoreOrderDetailDTO;

@Service
public class StoreOrderDetailServiceImpl implements StoreOrderDetailService {

	@Autowired
	private StoreOrderDetailRepository dao;
	
	// 스토어 주문 목록
	@Override
	public List<StoreOrderDetailDTO> listStoreOrderDetail() throws ServletException, IOException {
		System.out.println("서비스 - listStoreOrderDetail");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 스토어 주문 등록
	@Override
	public void insertStoreOrderDetail(StoreOrderDetailDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - insertStoreOrderDetail");
		
		System.out.println(dto);
		
		dao.save(dto);
	}

	// 스토어 주문 수정
	@Override
	public void updateStoreOrderDetail(StoreOrderDetailDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - updateStoreOrderDetail");
		
    
	    // 저장 또는 업데이트합니다.
	    dao.save(dto);
	}

	// 스토어 주문 삭제
	@Override
	public void deleteStoreOrderDetail(int detail_code) throws ServletException, IOException {
		System.out.println("서비스 - deleteStoreOrderDetail");
		
		dao.deleteById(detail_code);
	}

	// 스토어 주문 상세페이지
	@Override
	public StoreOrderDetailDTO findById(int detail_code) throws ServletException, IOException {
		System.out.println("서비스 - findById");
		
		return dao.findById(detail_code).get();
	}

}
