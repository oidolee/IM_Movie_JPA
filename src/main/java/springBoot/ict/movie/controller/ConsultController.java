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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.ConsultAnswerDTO;
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
    
    // 1:1문의 목록(고객)
    @GetMapping("/cusConsultList/{c_email}")
    public List<ConsultDTO> consultDetail(@PathVariable(name="c_email") String c_email, Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> consultDetail");
        List<ConsultDTO> list = service.ConsultCusList(c_email);
        model.addAttribute("list", list);
        System.out.println(list);
        
        return list;

    }
    
    // 1:1문의 상세
    @GetMapping("/select/{one_id}")
    public Map<String, Object> selectConsultAnswer(@PathVariable(name="one_id") int one_id, Model model) 
    		throws ServletException, IOException {
        logger.info("<<< url -> consultAnswer");
        
        
        Optional<ConsultDTO> csdto = null;
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
        	
        	 csdto = service.selectConsult(one_id);
            resultCode = "200";
            resultMsg = "CustomerInform Success";
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
    
	// 1:1문의 답변 등록
    @PostMapping("/saveAnswer")
    public Map<String, Object> consultAnswerInsert(@RequestBody ConsultAnswerDTO csadto)
            throws ServletException, IOException {
        logger.info("<<< url - consultAnswerInsert >>>");
        
        System.out.println("<<< url - consultAnswerInsert >>>");
      
        System.out.println(csadto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();
        
        try {
        	
            service.insertConsultAnswer(csadto);
            resultCode = "200";
            resultMsg = "ConsultInsert Success";
        } catch(Exception e) {
            resultCode = "400";
            resultMsg = e.getMessage();
            e.printStackTrace();
        }
        map.put("resultCode", resultCode);
        map.put("resultMsg", resultMsg);
        map.put("csadto", csadto);


        return map;
    }
    
    // 1:1문의 답변후 상태 업데이트
    @PutMapping("/completeAnswer/{one_id}")
    public void completeAnswer(@PathVariable(name="one_id") int one_id, Model model)
    		throws ServletException, IOException{
    	logger.info("<<< url -> consultAnswerList");
    	System.out.println("one_id :" + one_id);
    	service.updateCusConsultstate(one_id);
    }
    
    // 1:1문의 답변 리스트
    @GetMapping("/consultAnswer/{one_id}")
    public List<ConsultAnswerDTO> consultAnswerList(@PathVariable(name="one_id") int one_id, Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> consultAnswerList");
        System.out.println("one_id :" + one_id);
        List<ConsultAnswerDTO> list= service.selectConsultAnswer(one_id);
        model.addAttribute("list", list);
        System.out.println("controller:" + list);
        
        return list;

    }
    
//    // 회원정보 1건 찾기
//    @GetMapping("/select/{email}")
//    public Map<String, Object> selectCustomer(@PathVariable(name="email") String email, Model model) 
//    		throws ServletException, IOException {
//        logger.info("<<< url -> consultAnswer");
//        
//        
//        CustomerDTO cusdto = null;
//        String resultCode = "";
//        String resultMsg = "";
//
//        Map<String, Object> map = new HashMap<String, Object>();
//
//        try {
//        	
//        	cusdto = service.selectCustomer(email);
//            resultCode = "200";
//            resultMsg = "CustomerInform Success";
//        } catch(Exception e) {
//            resultCode = "400";
//            resultMsg = e.getMessage();
//            e.printStackTrace();
//        }
//        map.put("resultCode", resultCode);
//        map.put("resultMsg", resultMsg);
//        map.put("cusdto", cusdto);
//        
//        return map;
//
//    }
}
