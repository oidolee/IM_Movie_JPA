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

import springBoot.ict.movie.dto.StoreOrderDTO;
import springBoot.ict.movie.service.StoreOrderServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/MyPage_Store_Order")   
public class StoreOrderController {
   
   @Autowired
   private StoreOrderServiceImpl service;   
   
   private static final Logger logger = LoggerFactory.getLogger(StoreOrderController.class);
   
   // 스토어 리스트 조회
   @GetMapping() 
   //@GetMapping("/")  
   public List<StoreOrderDTO> storeOrderList(Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> storeOrderList");
        List<StoreOrderDTO> list = service.listStoreOrder();
        System.out.println("list : " + list);
        model.addAttribute("list", list); //★listStoreOrder_Admin list 설정
        
        return list;
    } 
   
   // 스토어 등록
    @PostMapping()
    public Map<String, Object> storeOrderInsert(@RequestBody StoreOrderDTO dto)
            throws ServletException, IOException {
        logger.info("<<< url - insertstart >>>");
        
        System.out.println("<<< url - insertstart >>>");
      
        System.out.println(dto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
           
            service.insertStoreOrder(dto);
            resultCode = "200";
            resultMsg = "StoreOrderInform Success";
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
//	@GetMapping("/EditStoreOrder/{itemCode}")
//	public StoreOrderDTO fetchStoreOrderByID(@PathVariable int itemCode)
//			throws ServletException, IOException {
//		logger.info("<<< url 스토어 디데일 - fetchSampleByID >>>");
//		System.out.println("itemCode : " + itemCode);
//		
//		
//		return service.findById(itemCode);
//	}
	
	// 스토어 수정
	@PutMapping("/EditStoreOrder/{itemCode}") // @RequestBody 누락시 부적합한 열 유형 뜸  //★gift_num???????
	   public Map<String, Object> storeOrderUpdate(@PathVariable int itemCode, @RequestBody StoreOrderDTO dto) 
	         throws ServletException, IOException{
	      logger.info("<<< url - storeOrderUpdate >>>");
	      
	      String resultCode = "";
	      String resultMsg = "";
	      
	      Map<String, Object> map  = new HashMap<String, Object>();
	      
	      try {
	    	 dto.setItem_code(itemCode);
	         service.updateStoreOrder(dto);
	            resultCode = "200";
	            resultMsg = "storeOrderUpdate success";
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
	@DeleteMapping("/DeleteStoreOrder/{itemCode}") 
	   public Map<String, Object> sampleDelete(@PathVariable int itemCode) 
		         throws ServletException, IOException{
		      logger.info("<<< url - sampleUpdate >>>");
		      
		      String resultCode = "";
		      String resultMsg = "";
		      
		      Map<String, Object> map  = new HashMap<String, Object>();
		      
		      try {
		          service.deleteStoreOrder(itemCode);

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


