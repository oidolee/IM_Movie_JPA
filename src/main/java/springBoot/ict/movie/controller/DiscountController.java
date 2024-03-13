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
import java.util.List;

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
	@GetMapping() 
	public List<DiscountDTO> DiscountList(Model model) 
			throws ServletException, IOException {
		
		logger.info("url - DiscountList");
		
		List<DiscountDTO> list = service.DiscountList();
		model.addAttribute("list", list);
		
		return list;
	}
	
	
}
