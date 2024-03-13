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
	public int insertStore(StoreDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - insertStore");
		
		return 0;
	}

	// 스토어 수정
	@Override
	public int updateStore(StoreDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - updateStore");
		
		return 0;
	}

	// 스토어 삭제
	@Override
	public int deleteStore(int item_code) throws ServletException, IOException {
		System.out.println("서비스 - deleteStore");
		
		return 0;
	}

	// 스토어 상세페이지
	@Override
	public StoreDTO findById(int item_code) throws ServletException, IOException {
		System.out.println("서비스 - findById");
		
		return null;
	}

}
