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

import springBoot.ict.movie.dto.StoreOrderDetailDTO;
import springBoot.ict.movie.service.StoreOrderDetailServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/MyPage_Store")   
public class StoreOrderDetailController {
   
   @Autowired
   private StoreOrderDetailServiceImpl service;   
   
   private static final Logger logger = LoggerFactory.getLogger(StoreOrderDetailController.class);
   
   // 스토어 리스트 조회
   @GetMapping() 
   //@GetMapping("/")  
   public List<StoreOrderDetailDTO> ListStore_MyPage(Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> storeOrderDetailList");
        List<StoreOrderDetailDTO> list = service.listStoreOrderDetail();
        System.out.println("list : " + list);
        model.addAttribute("list", list); 
        
        return list;
    } 
   
//   //@GetMapping("/")  
//   public List<StoreOrderDetailDTO> ListStore_MyPage(Model model)
//            throws ServletException, IOException {
//        logger.info("<<< url -> storeOrderDetailList");
//        List<StoreOrderDetailDTO> list = service.listStoreOrderDetail();
//        System.out.println("list : " + list);
//        model.addAttribute("list", list); 
//        
//        return list;
//    } 
   
   // 스토어 등록
    @PostMapping()
    public Map<String, Object> storeOrderDetailInsert(@RequestBody StoreOrderDetailDTO dto)
            throws ServletException, IOException {
        logger.info("<<< url - insertstart >>>");
        
        System.out.println("<<< url - insertstart >>>");
      
        System.out.println(dto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
           
            service.insertStoreOrderDetail(dto);
            resultCode = "200";
            resultMsg = "StoreOrderDetailInform Success";
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
//	@GetMapping("/EditStoreOrderDetail/{itemCode}")
//	public StoreOrderDetailDTO fetchStoreOrderDetailByID(@PathVariable int itemCode)
//			throws ServletException, IOException {
//		logger.info("<<< url 스토어 디데일 - fetchSampleByID >>>");
//		System.out.println("itemCode : " + itemCode);
//		
//		
//		return service.findById(itemCode);
//	}
	
	// 스토어 수정
	@PutMapping("/EditStoreOrderDetail/{itemCode}") // @RequestBody 누락시 부적합한 열 유형 뜸  //★gift_num???????
	   public Map<String, Object> storeOrderDetailUpdate(@PathVariable int itemCode, @RequestBody StoreOrderDetailDTO dto) 
	         throws ServletException, IOException{
	      logger.info("<<< url - storeOrderDetailUpdate >>>");
	      
	      String resultCode = "";
	      String resultMsg = "";
	      
	      Map<String, Object> map  = new HashMap<String, Object>();
	      
	      try {
	    	 dto.setItem_code(itemCode);
	         service.updateStoreOrderDetail(dto);
	            resultCode = "200";
	            resultMsg = "storeOrderDetailUpdate success";
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
	@DeleteMapping("/DeleteStoreOrderDetail/{itemCode}") 
	   public Map<String, Object> sampleDelete(@PathVariable int itemCode) 
		         throws ServletException, IOException{
		      logger.info("<<< url - sampleUpdate >>>");
		      
		      String resultCode = "";
		      String resultMsg = "";
		      
		      Map<String, Object> map  = new HashMap<String, Object>();
		      
		      try {
		          service.deleteStoreOrderDetail(itemCode);

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


