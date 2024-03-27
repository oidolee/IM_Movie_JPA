package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.StoreRepository;
import springBoot.ict.movie.dto.StoreDTO;

@Service
public class StoreServiceImpl implements StoreService {

	@Autowired
	private StoreRepository dao;
	
	// 스토어 목록
	@Override
	public List<StoreDTO> listStore() throws ServletException, IOException {
		System.out.println("서비스 - listStore");
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 스토어 등록
	@Override
	public void insertStore(StoreDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - insertStore");
		System.out.println(dto);
		
		dao.save(dto);
	}

	// 스토어 수정
	@Override
	public void updateStore(StoreDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - updateStore");
		
	    // 저장 또는 업데이트합니다.
	    dao.save(dto);
	}

	// 스토어 삭제
	@Override
	public void deleteStore(int item_code) throws ServletException, IOException {
		System.out.println("서비스 - deleteStore");
		
		dao.deleteById(item_code);
	}

	// 스토어 상세페이지
	@Override
	public StoreDTO findById(int item_code) throws ServletException, IOException {
		System.out.println("서비스 - findById");
		
		return dao.findById(item_code).get();
	}

}
