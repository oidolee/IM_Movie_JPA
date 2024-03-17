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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.CouponCusDTO;
import springBoot.ict.movie.dto.CouponDTO;
import springBoot.ict.movie.service.CouponServiceImpl;



@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_6/coupon")
public class CouponController {
	@Autowired
	private CouponServiceImpl service;
	
	
	private static final Logger logger = LoggerFactory.getLogger(CouponController.class);
	
	
	// 쿠폰 등록
    @PostMapping("/save")
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
        } catch(Exception e) {
            resultCode = "400";
            resultMsg = e.getMessage();
            e.printStackTrace();
        }
        map.put("resultCode", resultCode);
        map.put("resultMsg", resultMsg);
        map.put("cpdto", cpdto);


        return map;
    }
    
    // 고객 쿠폰 등록
    @PostMapping("/saveCusCoupon")
    public Map<String, Object> couponCusInsert(@RequestBody CouponCusDTO cpcusdto)
            throws ServletException, IOException {
        logger.info("<<< url - couponCusInsert >>>");
        System.out.println(cpcusdto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();
        
        try {
        	
            service.insertCusCoupon(cpcusdto);
            resultCode = "200";
            resultMsg = "couponCusInsert Success";
        } catch(Exception e) {
            resultCode = "400";
            resultMsg = e.getMessage();
            e.printStackTrace();
        }
        map.put("resultCode", resultCode);
        map.put("resultMsg", resultMsg);
        map.put("cpcusdto", cpcusdto);


        return map;
    }
    
    // 쿠폰 리스트 (관리자)
    @GetMapping("/coupon")
    public List<CouponDTO> couponList (Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> couponList");
        
        List<CouponDTO> list= service.couponList();
        model.addAttribute("list", list);
        System.out.println("controller:" + list);
        
        return list;

    }
    
    // 쿠폰 상세내역
    @GetMapping("/selectCoupon/{ic_name}")
    public Map<String, Object> selectConsultDetail(@PathVariable(name="ic_name") String ic_name, Model model) 
    		throws ServletException, IOException {
        logger.info("<<< url -> selectConsultDetail");
        
        
        Optional<CouponDTO> cpdto = null;
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
        	
        	cpdto = service.selectCoupon(ic_name);
            resultCode = "200";
            resultMsg = "selectConsultAnswer Success";
        } catch(Exception e) {
            resultCode = "400";
            resultMsg = e.getMessage();
            e.printStackTrace();
        }
        map.put("resultCode", resultCode);
        map.put("resultMsg", resultMsg);
        map.put("cpdto", cpdto);
        
        return map;

    }
    
    // 고객 쿠폰 리스트
    @GetMapping("/couponCus")
    public List<CouponCusDTO> couponCusList(@PathVariable(name="c_email") String c_email, Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> couponCusList");
        System.out.println("c_email :" + c_email);
        List<CouponCusDTO> list= service.cusCouponList(c_email);
        model.addAttribute("list", list);
        System.out.println("controller:" + list);
        
        return list;

    }

}
