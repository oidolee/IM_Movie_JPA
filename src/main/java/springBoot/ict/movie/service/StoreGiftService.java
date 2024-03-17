package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.StoreGiftDTO;

public interface StoreGiftService {

	// 스토어 선물하기 목록
	public List<StoreGiftDTO> listStoreGift()
			throws ServletException, IOException;
	
	// 스토어  선물하기 등록
	public void insertStoreGift(StoreGiftDTO dto)
			throws ServletException, IOException;	
	
	// 스토어 선물하기 수정
	public void updateStoreGift(StoreGiftDTO dto)
			throws ServletException, IOException;		
	
	// 스토어 선물하기  삭제
	public void deleteStoreGift(int gift_num)
			throws ServletException, IOException;	
	
	// 스토어 선물하기  상세페이지
	public StoreGiftDTO findById(int gift_num)
			throws ServletException, IOException;	
	
}
