package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dao.PaymentDTO;
import springBoot.ict.movie.service.PaymentServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_1")
public class PaymentController {

	@Autowired
	private PaymentServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(PaymentController.class);

	// 등록
	@PostMapping("/PaymentInsert") 
	public Map<String, Object> PaymentInsert(@RequestBody PaymentDTO dto) 
		throws ServletException, IOException {
		
		logger.info("url - PaymentInsert");
		
		System.out.println(dto);
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			
			service.PaymentInsert(dto);
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
