package springBoot.ict.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.ReviewDTO;
import springBoot.ict.movie.service.DiscountServiceImpl;
import springBoot.ict.movie.service.ReviewServiceImpl;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;




@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_5/review")
public class ReviewController {
	
	private static final Logger logger = LoggerFactory.getLogger(ReviewController.class);

	@Autowired
	private ReviewServiceImpl service;
	
	// 삽입
	@PostMapping("/addReview")
	public Map<String, Object> addReview(@RequestBody ReviewDTO dto) 
			throws ServletException, IOException {
		System.out.println("page5_ addReview tart");
		
		System.out.println(dto);
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			
			service.addReview(dto);
			resultCode = "200";
			resultMsg = "addReview Success";
			
		} catch(Exception e) {
			
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("dto", dto);
		
		return map;
	}
	
	
	// 목록
	@GetMapping("/reviewList") 
	public List<ReviewDTO> reviewList(Model model) 
		throws ServletException, IOException {
		
		logger.info("url - DiscountList");
		
		List<ReviewDTO> list = service.reviewList();
		model.addAttribute("list", list);
		System.out.println("reviewList : " + list);
		return list;
	}
	

	// 수정
//	@PutMapping("/save/{ip_no}") 
//	public Map<String, Object> editPark(@PathVariable("ip_no") int ip_no, @RequestBody ParkingDTO dto) 
//			throws ServletException, IOException {
//		logger.info("url - editPark");
//		System.out.println(dto);
//		String resultCode = "";
//		String resultMsg = "";
//		
//		Map<String, Object> map = new HashMap<String, Object>();
//		try {
//			service.editPark(dto);
//			resultCode = "200";
//			resultMsg = "editPark Success";			
//		} catch(Exception e) {
//			
//			resultCode = "400";
//			resultMsg = e.getMessage();
//			e.printStackTrace();
//		}
//		
//		map.put("resultCode", resultCode);
//		map.put("resultMsg", resultMsg);
//		map.put("dto", dto);
//		return map;
//	}
	
}
