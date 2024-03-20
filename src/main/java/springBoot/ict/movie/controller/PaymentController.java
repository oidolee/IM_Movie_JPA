package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.PaymentDTO;
import springBoot.ict.movie.service.PaymentServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_1")
public class PaymentController {

	@Autowired
	private PaymentServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(PaymentController.class);
	
	// 목록
	@GetMapping("/PaymentList") 
	public List<PaymentDTO> PaymentList(Model model) 
		throws ServletException, IOException {
		
		logger.info("url - PaymentList");
		
		List<PaymentDTO> list = service.PaymentList();
		model.addAttribute("list", list);
		
		return list;
	}
}
