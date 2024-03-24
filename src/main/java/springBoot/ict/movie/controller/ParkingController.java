package springBoot.ict.movie.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.ParkingDTO;
import springBoot.ict.movie.service.ParkingServiceImpl;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_2")
public class ParkingController {
	
	private static final Logger logger = LoggerFactory.getLogger(ParkingController.class);

	@Autowired
	private ParkingServiceImpl service;
	// 목록
	@GetMapping("/ParkingList")
	public List<ParkingDTO> ParkingList(Model model) 
			throws ServletException, IOException {
		System.out.println("page2_start");
		List<ParkingDTO> list = service.ParkingList();
		System.out.println(list);
		return list;
	}
	

	// 수정(기존 차량구역 자리 주차등록으로 값 업데이트)
	@PutMapping("/save/{ip_no}") 
	public Map<String, Object> editPark(@PathVariable("ip_no") int ip_no, @RequestBody ParkingDTO dto) 
			throws ServletException, IOException {
		logger.info("url - editPark");
		System.out.println(dto);
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			service.editPark(dto);
			resultCode = "200";
			resultMsg = "editPark Success";			
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
	
	//삭제
	@PutMapping("/delete/{ip_no}") 
	public Map<String, Object> parkDelete(@PathVariable("ip_no") int ip_no, @RequestBody ParkingDTO dto){
		Map<String, Object> map = new HashMap<String, Object>();
		logger.info("url - delete dto : ");
		System.out.println(dto);
		
		String resultCode = "";
		String resultMsg = "";
		try {
			service.parkDelete(dto);
			resultCode = "200";
			resultMsg = "editPark Success";			
		} catch(Exception e) {
			
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		
		
		return map;
		
	}
}
