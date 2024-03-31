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
import springBoot.ict.movie.service.CouponServiceImpl;

@CrossOrigin(origins = "**", maxAge = 3600)
@RestController
@RequestMapping(value = "/page_6/coupon")
public class CouponController {
	@Autowired
	private CouponServiceImpl service;

	private static final Logger logger = LoggerFactory.getLogger(CouponController.class);

	// 쿠폰 리스트 (관리자)
	@GetMapping("/couponList")
	public List<CouponDTO> couponList(Model model) throws ServletException, IOException {
		logger.info("<<< url -> couponList");

		List<CouponDTO> list = service.couponList();
		model.addAttribute("list", list);
		System.out.println("controller:" + list);

		return list;

	}

	// 쿠폰 상세내역
	@GetMapping("/selectCoupon/{ic_num}")
	public Map<String, Object> selectCouponDetail(@PathVariable(name = "ic_num") int ic_num, Model model)

			throws ServletException, IOException {
		logger.info("<<< url -> selectConsultDetail");

		Optional<CouponDTO> cpdto = null;
		String resultCode = "";
		String resultMsg = "";

		Map<String, Object> map = new HashMap<String, Object>();

		try {

			cpdto = service.selectCoupon(ic_num);
			System.out.println(cpdto);
			resultCode = "200";
			resultMsg = "selectConsultAnswer Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("cpdto", cpdto);

		return map;

	}

	// 쿠폰 등록
	@PostMapping("/saveCoupon")
	public Map<String, Object> couponInsert(@RequestBody CouponDTO cpdto) 
			throws ServletException, IOException {
		logger.info("<<< url - couponInsert >>>");

		System.out.println("<<< url - couponInsert >>>");

		System.out.println(cpdto);

		String resultCode = "";
		String resultMsg = "";

		Map<String, Object> map = new HashMap<String, Object>();

		try {

			service.insertCoupon(cpdto);
			resultCode = "200";
			resultMsg = "couponInsert Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("cpdto", cpdto);

		return map;
	}

	// 쿠폰 수정
	@PutMapping("/updateCoupon")
	public Map<String, Object> updateCoupon(@RequestBody CouponDTO cpdto) 
			throws ServletException, IOException {
		logger.info("<<< url - updateCoupon >>>");
		System.out.println("cpdto : " + cpdto);

		String resultCode = "";
		String resultMsg = "";

		Map<String, Object> map = new HashMap<String, Object>();

		try {
			service.updateCoupon(cpdto);
			resultCode = "200";
			resultMsg = "couponCusInsert Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("cpdto", cpdto);

		return map;
	}

	// 쿠폰 삭제
	@DeleteMapping("/deleteCoupon/{ic_num}")
	public Map<String, Object> deleteCoupon(@PathVariable(name = "ic_num") int ic_num, Model model)
			throws ServletException, IOException {
		logger.info("<<< url - deleteCoupon >>>");
		
		System.out.println(ic_num);
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			
			service.deleteCoupon(ic_num);		
			resultCode = "200";
			resultMsg = "DiscountInsert Success";
		} 
		
		catch(Exception e) {
			
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("ic_num", ic_num);
		
		return map; 
	}

	// 고객 쿠폰
	// 고객 쿠폰 등록
	@PostMapping("/saveCusCoupon")
	public Map<String, Object> couponCusInsert(@RequestBody CouponCusDTO cpcusdto)
			throws ServletException, IOException {
		logger.info("<<< url - couponCusInsert >>>");
		System.out.println(cpcusdto);

		String resultCode = "";
		String resultMsg = "";

		Map<String, Object> map = new HashMap<String, Object>();
		System.out.println("cpcusdto: " + cpcusdto);

		try {

			service.insertCusCoupon(cpcusdto);
			resultCode = "200";
			resultMsg = "couponCusInsert Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("cpcusdto", cpcusdto);

		return map;
	}

	// 고객 쿠폰 리스트
	@GetMapping("/couponCusList/{c_email}")
	public List<CouponCusDTO> couponCusList(@PathVariable(name = "c_email") String c_email, Model model)
			throws ServletException, IOException {
		logger.info("<<< url -> couponCusList");
		System.out.println("c_email :" + c_email);
		List<CouponCusDTO> list = service.cusCouponList(c_email);
		model.addAttribute("list", list);
		System.out.println("controller:" + list);

		return list;

	}

	// 고객 쿠폰 갯수
	@GetMapping("/couponCusCount/{c_email}")
	public int couponCusListCount(@PathVariable(name = "c_email") String c_email, Model model)
			throws ServletException, IOException {
		logger.info("<<< url -> couponCusListCount");
		System.out.println("c_email :" + c_email);
		int couponCount = service.countCusCoupon(c_email);
		model.addAttribute("couponCount", couponCount);
		System.out.println("couponCount : " + couponCount);

		return couponCount;

	}

	// 고객 쿠폰 삭제
	@PutMapping("/deleteCusCoupon/{ic_num}")
	public Map<String, Object> updateCusCoupon(@PathVariable(name = "ic_num") int ic_num, Model model)
			throws ServletException, IOException {
		logger.info("<<< url - updateCoupon >>>");
		System.out.println("ic_num : " + ic_num);

		String resultCode = "";
		String resultMsg = "";
		int deleteStatusCnt = 0;
		Map<String, Object> map = new HashMap<String, Object>();

		try {
			deleteStatusCnt = service.deleteCusCoupon(ic_num);
			resultCode = "200";
			resultMsg = "deleteCusCoupon Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("deleteStatusCnt", deleteStatusCnt);

		return map;
	}
	
	// 고객 쿠폰 상세
	@GetMapping("/couponCusDetail/{ic_num}")
	public Map<String, Object> couponCusDetail(@PathVariable(name = "ic_num") int ic_num, Model model)

			throws ServletException, IOException {
		logger.info("<<< url -> selectConsultDetail");

		Optional<CouponCusDTO> cpcusdto = null;
		String resultCode = "";
		String resultMsg = "";

		Map<String, Object> map = new HashMap<String, Object>();

		try {

			cpcusdto = service.cusCouponDetail(ic_num);
			System.out.println(cpcusdto);
			resultCode = "200";
			resultMsg = "selectConsultAnswer Success";
		} catch (Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		map.put("cpcusdto", cpcusdto);

		return map;

	}

}
