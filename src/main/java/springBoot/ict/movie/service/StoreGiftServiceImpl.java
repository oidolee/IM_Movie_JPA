package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.StoreGiftRepository;
import springBoot.ict.movie.dto.StoreGiftDTO;

@Service
public class StoreGiftServiceImpl implements StoreGiftService {

	@Autowired
	private StoreGiftRepository dao;
	
	// 스토어 목록
	@Override
	public List<StoreGiftDTO> listStoreGift() throws ServletException, IOException {
		System.out.println("서비스 - listStoreGift");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 스토어 등록
	@Override
	public void insertStoreGift(StoreGiftDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - insertStoreGift");
		
		System.out.println(dto);
		
		dao.save(dto);
	}

	// 스토어 수정
	@Override
	public void updateStoreGift(StoreGiftDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - updateStoreGift");
		
    
	    // 저장 또는 업데이트합니다.
	    dao.save(dto);
	}

	// 스토어 삭제
	@Override
	public void deleteStoreGift(int gift_num) throws ServletException, IOException {
		System.out.println("서비스 - deleteStoreGift");
		
		dao.deleteById(gift_num);
	}

	// 스토어 상세페이지
	@Override
	public StoreGiftDTO findById(int gift_num) throws ServletException, IOException {
		System.out.println("서비스 - findById");
		
		return dao.findById(gift_num).get();
	}

}
