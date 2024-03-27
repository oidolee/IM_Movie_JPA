package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.StoreMapRepository;
import springBoot.ict.movie.dto.StoreMapDTO;

@Service
public class StoreMapServiceImpl implements StoreMapService {

	@Autowired
	private StoreMapRepository dao;
	
	// 스토어 지도 목록
	@Override
	public List<StoreMapDTO> listStoreMap() throws ServletException, IOException {
		System.out.println("서비스 - listStoreMap");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 스토어 지도 등록
	@Override
	public void insertStoreMap(StoreMapDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - StoreMapDTO");
		
		System.out.println(dto);
		
		dao.save(dto);
	}

	// 스토어 지도 수정
	@Override
	public void updateStoreMap(StoreMapDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - StoreMapDTO");
		
    
	    // 저장 또는 업데이트합니다.
	    dao.save(dto);
	}

	// 스토어 지도 삭제
	@Override
	public void deleteStoreMap(int ticketmap_no) throws ServletException, IOException {
		System.out.println("서비스 - deleteStoreMap");
		
		dao.deleteById(ticketmap_no);
	}

	// 스토어 지도 상세페이지
	@Override
	public StoreMapDTO findByIdMap(int ticketmap_no) throws ServletException, IOException {
		System.out.println("서비스 - findByIdMap");
		
		return dao.findById(ticketmap_no).get();
	}

}
