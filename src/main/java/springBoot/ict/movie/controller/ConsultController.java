package springBoot.ict.movie.controller;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.ConsultDTO;

import springBoot.ict.movie.service.ConsultServiceImpl;


@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_6")
public class ConsultController {
	@Autowired
	private ConsultServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(ConsultController.class);
	
	
	// 1:1문의 목록 등록
    @PostMapping("/save")
    public Map<String, Object> consultInsert(@RequestBody ConsultDTO csdto)
            throws ServletException, IOException {
        logger.info("<<< url - consultInsert >>>");
        
        System.out.println("<<< url - consultInsert >>>");
      
        System.out.println(csdto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();
        
        try {
        	
            service.insertConsult(csdto);
            resultCode = "200";
            resultMsg = "ConsultInsert Success";
        } catch(Exception e) {
            resultCode = "400";
            resultMsg = e.getMessage();
            e.printStackTrace();
        }
        map.put("resultCode", resultCode);
        map.put("resultMsg", resultMsg);
        map.put("csdto", csdto);


        return map;
    }

    // 1:1문의 목록
    @GetMapping()
    public List<ConsultDTO> consultList(Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> consultList");
        List<ConsultDTO> list= service.ConsultList();
        model.addAttribute("list", list);
        System.out.println(list);
        
        return list;

    }
}
		
	
//	// 로그인
//    @PostMapping("/login")
//    public Map<String, Object> login(@RequestBody CustomerDTO dto) 
//    		throws ServletException, IOException {
//    	
//        CustomerDTO customer = service.loginCustomer(dto);
//        Map<String, Object> response = new HashMap<>();
//        if (customer != null) {
//            response.put("resultCode", "200");
//            response.put("resultMsg", "로그인 성공!");
//            response.put("customer", customer);
//        } else {
//            response.put("resultCode", "400");
//            response.put("resultMsg", "로그인 실패!");
//        }
//        return response;
//    }
//	
//	// 아이디 찾기
//    @PostMapping("/findID")
//    public Map<String, Object> findID(@RequestBody CustomerDTO dto) 
//    		throws ServletException, IOException {
//        logger.info("<<< url -> findID start");
//        System.out.println("dto" + dto.toString());
//
//        String resultCode = "";
//        String resultMsg = "";
//
//        Map<String, Object> map = new HashMap<String, Object>();
//
//        try {
//            String foundEmail = service.findID(dto.getIC_name(), dto.getIC_hp());
//            if (foundEmail != null) {
//                resultCode = "200";
//                resultMsg = "ID found";
//                map.put("foundEmail", foundEmail);
//            } else {
//                resultCode = "404";
//                resultMsg = "ID not found";
//            }
//        } catch (Exception e) {
//            resultCode = "400";
//            resultMsg = e.getMessage();
//            e.printStackTrace();
//        }
//        map.put("resultCode", resultCode);
//        map.put("resultMsg", resultMsg);
//
//        return map;
//    }
//	
//	
// // 비밀번호찾기 
//    @PostMapping("/searchPWD")
//    public Map<String, Object> findPWD(@RequestBody CustomerDTO dto) 
//    		throws ServletException, IOException {
//        logger.info("<<< url -> searchPWD start");
//        System.out.println("dto" + dto.toString());
//
//        String resultCode = "";
//        String resultMsg = "";
//
//        Map<String, Object> map = new HashMap<String, Object>();
//
//        try {
//            String foundPWD = service.findPWD(dto.getIC_email(), dto.getIC_hp());
//            if (foundPWD != null) {
//                resultCode = "200";
//                resultMsg = "PWD found";
//                map.put("foundPWD", foundPWD);
//            } else {
//                resultCode = "404";
//                resultMsg = "PWD not found";
//            }
//        } catch (Exception e) {
//            resultCode = "400";
//            resultMsg = e.getMessage();
//            e.printStackTrace();
//        }
//        map.put("resultCode", resultCode);
//        map.put("resultMsg", resultMsg);
//
//        return map;