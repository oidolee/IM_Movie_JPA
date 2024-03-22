package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.ParkingRepository;
import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.ParkingDTO;

@Service
public class ParkingServiceImpl implements ParkingService{
	
	@Autowired
	private ParkingRepository dao;
	
	//목록
	@Override
	public List<ParkingDTO> ParkingList() throws ServletException, IOException {
		System.out.println("ParkingServiceImpl - ParkingList");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}
	
	// 수정
	@Override
	public void editPark(ParkingDTO dto) 
			throws ServletException, IOException {
		
		System.out.println("DiscountServiceImpl - DiscountUpdate");
		
		System.out.println(dto);
		
		dao.save(dto);
	}

	//삭제(주차 행 내용 초기화)
	public void parkDelete(ParkingDTO dto) 
			throws ServletException, IOException{
		System.out.println("parkDelete ");
		dao.save(dto);
	}
	

	//등록
//	@Override
//	public void editPark(ParkingDTO dto) throws ServletException, IOException {
//		System.out.println("ParkingServiceImpl - editPark");
//		System.out.println(dto);		
//		dao.save(dto);
//	}
	
	
//	// 등록
//		@Override
//	public void DiscountInsert(DiscountDTO dto)
//			throws ServletException, IOException {
//		
//		System.out.println("DiscountServiceImpl - DiscountInsert");
//		
//		System.out.println(dto);		
//		
//		dao.save(dto);
//	}

//	// 상세페이지
//	@Override
//	public DiscountDTO DiscountDetailList(int dc_num) 
//			throws ServletException, IOException {
//		
//		System.out.println("DiscountServiceImpl - DiscountDetailList");
//		
//		DiscountDTO dto = dao.DiscountDetailList(dc_num);
//		
//		System.out.println(dc_num);	
//		System.out.println(dto);
//		
//		return dto;
//	}
//

//
//	// 삭제
//	@Override
//	public void DiscountDelete(int dc_num) 
//				throws ServletException, IOException {
//			
//			System.out.println("DiscountServiceImpl - DiscountDelete");
//			
//			System.out.println(dc_num);
//			
//			dao.deleteById(dc_num);
//		}

}
