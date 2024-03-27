package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import springBoot.ict.movie.dto.CouponCusDTO;
import springBoot.ict.movie.dto.CouponDTO;
import springBoot.ict.movie.dto.TheaterDTO;
import springBoot.ict.movie.service.CouponServiceImpl;
import springBoot.ict.movie.service.TheaterServiceImpl;

@CrossOrigin(origins = "**", maxAge = 3600)
@RestController
@RequestMapping(value = "/page_6/theater")
public class TheaterController {
	@Autowired
	private TheaterServiceImpl service;

	private static final Logger logger = LoggerFactory.getLogger(TheaterController.class);

	// 나의 영화관 상세목록
	@GetMapping("/theaterDetail/{c_email}")
	public Map<String, Object> theaterDetail(@PathVariable(name = "c_email") String c_email, Model model) 
			throws ServletException, IOException {
		logger.info("<<< url -> couponList");

		System.out.println("<<< url - couponInsert >>>");

		String resultCode = "";
		String resultMsg = "";

		Optional<TheaterDTO> tdto = null;
		Map<String, Object> map = new HashMap<String, Object>();

		try {
			tdto = service.selectTheater(c_email);
			
			resultCode = "200";
			resultMsg = "theaterDetail Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("tdto", tdto);

		return map;

	}


	// 영화관 등록
	@PostMapping("/saveTheater")
	public Map<String, Object> theaterInsert(@RequestBody TheaterDTO tdto)
			throws ServletException, IOException {
		logger.info("<<< url - couponInsert >>>");

		System.out.println("<<< url - couponInsert >>>");

		System.out.println(tdto);

		String resultCode = "";
		String resultMsg = "";

		Map<String, Object> map = new HashMap<String, Object>();

		try {

			service.insertTheater(tdto);
			resultCode = "200";
			resultMsg = "theaterInsert Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("tdto", tdto);

		return map;
	}

	// 영화관 수정
	@PutMapping("/updateTheater")
	public Map<String, Object> updateTheater(@RequestBody TheaterDTO tdto) 
			throws ServletException, IOException {
		logger.info("<<< url - updateTheater >>>");
		System.out.println("tdto : " + tdto);

		String resultCode = "";
		String resultMsg = "";

		Map<String, Object> map = new HashMap<String, Object>();

		try {
			service.updateTheater(tdto);
			resultCode = "200";
			resultMsg = "updateTheater Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("tdto", tdto);

		return map;
	}

}
