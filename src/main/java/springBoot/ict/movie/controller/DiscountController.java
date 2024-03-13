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
import springBoot.ict.movie.service.DiscountServiceImpl;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_1")
public class DiscountController {

	@Autowired
	private DiscountServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(DiscountController.class);
	
	// 목록
	@GetMapping("/DiscountList") 
	public List<DiscountDTO> DiscountList(Model model) 
			throws ServletException, IOException {
		
		logger.info("url - DiscountList");
		
		List<DiscountDTO> list = service.DiscountList();
		model.addAttribute("list", list);
		
		return list;
	}
	
	// 등록
	@PostMapping("/DiscountInsert") 
	public Map<String, Object> DiscountInsert(@RequestBody DiscountDTO dto) 
			throws ServletException, IOException {
		
		logger.info("url - DiscountInsert");
		
		System.out.println(dto);
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			
			service.DiscountInsert(dto);
			resultCode = "200";
			resultMsg = "DiscountInsert Success";
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
	
	
}
