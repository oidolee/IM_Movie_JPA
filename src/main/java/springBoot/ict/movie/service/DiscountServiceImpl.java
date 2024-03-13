package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.DiscountRepository;
import springBoot.ict.movie.dto.DiscountDTO;

@Service
public class DiscountServiceImpl implements DiscountService {

	@Autowired
	private DiscountRepository dao;
	
	// 목록
	@Override
	public List<DiscountDTO> DiscountList() 
			throws ServletException, IOException {
		
		System.out.println("DiscountServiceImpl - DiscountList");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 등록
	@Override
	public void DiscountInsert(DiscountDTO dto)
			throws ServletException, IOException {
		
		System.out.println("DiscountServiceImpl - DiscountInsert");
		
		System.out.println(dto);		
		
		dao.save(dto);
	}

	// 상세페이지
	@Override
	public DiscountDTO DiscountDetailList(int dc_num) 
			throws ServletException, IOException {
		
		System.out.println("DiscountServiceImpl - DiscountDetailList");
		
		System.out.println(dc_num);		
		
		DiscountDTO dto = dao.DiscountDetailList(dc_num);
		
		return dto;
	}

	@Override
	public int DiscountUpdate(DiscountDTO dto) 
			throws ServletException, IOException {
		
		System.out.println("DiscountServiceImpl - DiscountUpdate");
		
		return 0;
	}

	@Override
	public int DiscountDelete(int dc_num) 
			throws ServletException, IOException {
		
		System.out.println("DiscountServiceImpl - DiscountDelete");
		
		return 0;
	}
}
