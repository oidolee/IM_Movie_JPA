package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.StoreMapDTO;

public interface StoreMapService {

	// 스토어 지도 목록
	public List<StoreMapDTO> listStoreMap()
			throws ServletException, IOException;
	
	// 스토어  지도 등록
	public void insertStoreMap(StoreMapDTO dto)
			throws ServletException, IOException;	
	
	// 스토어 지도  수정
	public void updateStoreMap(StoreMapDTO dto)
			throws ServletException, IOException;		
	
	// 스토어 지도  삭제
	public void deleteStoreMap(int ticketmap_no)
			throws ServletException, IOException;	
	
	// 스토어 지도  상세페이지
	public StoreMapDTO findByIdMap(int ticketmap_no)
			throws ServletException, IOException;	
	
}
