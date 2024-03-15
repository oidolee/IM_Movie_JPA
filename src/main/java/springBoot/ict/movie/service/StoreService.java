package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.StoreDTO;

public interface StoreService {

	// 스토어 목록
	public List<StoreDTO> listStore()
			throws ServletException, IOException;
	
	// 스토어 등록
	public void insertStore(StoreDTO dto)
			throws ServletException, IOException;	
	
	// 스토어 수정
	public void updateStore(StoreDTO dto)
			throws ServletException, IOException;		
	
	// 스토어 삭제
	public void deleteStore(int item_code)
			throws ServletException, IOException;	
	
	// 스토어 상세페이지
	public StoreDTO findById(int item_code)
			throws ServletException, IOException;	
	
}
