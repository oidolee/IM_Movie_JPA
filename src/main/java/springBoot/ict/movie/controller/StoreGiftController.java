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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.StoreGiftDTO;
import springBoot.ict.movie.service.StoreGiftServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_3/EditStoreGift_Admin")   
public class StoreGiftController {
   
   @Autowired
   private StoreGiftServiceImpl service;   
   
   private static final Logger logger = LoggerFactory.getLogger(StoreGiftController.class);
   
   // 스토어 리스트 조회
   @GetMapping() 
   //@GetMapping("/")  
   public List<StoreGiftDTO> storeGiftList(Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> storeGiftList");
        List<StoreGiftDTO> list = service.listStoreGift();
        System.out.println("list : " + list);
        model.addAttribute("list", list); //★listStoreGift_Admin list 설정
        
        
        return list;
    } 
   
   // 스토어 등록
    @PostMapping("/AddStoreGift_Admin")
    public Map<String, Object> storeGiftInsert(@RequestBody StoreGiftDTO dto)
            throws ServletException, IOException {
        logger.info("<<< url - insertstart >>>");
        
        System.out.println("<<< url - insertstart >>>");
      
        System.out.println(dto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
           
            service.insertStoreGift(dto);
            resultCode = "200";
            resultMsg = "StoreGiftInform Success";
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

	

	// 스토어 상세페이지
	@GetMapping("/EditStoreGift_Admin/{giftNum}")
	public StoreGiftDTO fetchStoreGiftByID(@PathVariable int giftNum)
			throws ServletException, IOException {
		logger.info("<<< url 스토어 디데일 - fetchSampleByID >>>");
		System.out.println("giftNum : " + giftNum);
		
		
		return service.findById(giftNum);
	}
	
	// 스토어 수정
	@PutMapping("/EditStoreGift_Admin/{giftNum}") // @RequestBody 누락시 부적합한 열 유형 뜸  //★gift_num???????
	   public Map<String, Object> storeGiftUpdate(@PathVariable int giftNum, @RequestBody StoreGiftDTO dto) 
	         throws ServletException, IOException{
	      logger.info("<<< url - storeGiftUpdate >>>");
	      
	      String resultCode = "";
	      String resultMsg = "";
	      
	      Map<String, Object> map  = new HashMap<String, Object>();
	      
	      try {
	    	 dto.setItem_code(giftNum);
	         service.updateStoreGift(dto);
	            resultCode = "200";
	            resultMsg = "storeGiftUpdate success";
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
    
    
    
	// 스토어 삭제
	@DeleteMapping("/DeleteStoreGift_Admin/{giftNum}") 
	   public Map<String, Object> sampleDelete(@PathVariable int giftNum) 
		         throws ServletException, IOException{
		      logger.info("<<< url - sampleUpdate >>>");
		      
		      String resultCode = "";
		      String resultMsg = "";
		      
		      Map<String, Object> map  = new HashMap<String, Object>();
		      
		      try {
		          service.deleteStoreGift(giftNum);

		            resultCode = "200";
		            resultMsg = "sampleDelete success";

		        
		      }catch(Exception e) {
		             resultCode = "400";
		             resultMsg = e.getMessage();
		             e.printStackTrace();
		         }
		         map.put("resultCode", resultCode);
		         map.put("resultMsg", resultMsg);


		         return map;
		     }
	
	
	
		
	}


