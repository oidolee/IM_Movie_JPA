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

import springBoot.ict.movie.dto.StoreMapDTO;
import springBoot.ict.movie.service.StoreMapServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_3")   
public class StoreMapController {
   
   @Autowired
   private StoreMapServiceImpl service;   
   
   private static final Logger logger = LoggerFactory.getLogger(StoreMapController.class);
   
   // 스토어 리스트 조회
   @GetMapping()   // ★페이지 이름 아니고, 어떤걸 쓰는거지???
   //@GetMapping("/")   // ★페이지 이름 아니고, 어떤걸 쓰는거지???
   public List<StoreMapDTO> storeList(Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> storeList");
        List<StoreMapDTO> list = service.listStoreMap();
        System.out.println("list : " + list);
        model.addAttribute("list", list); //★listStoreMap_Map list 설정
        
        
        return list;
    } 
   
   // 스토어 등록
    @PostMapping("/AddStoreMap_Map")
    public Map<String, Object> storeInsert(@RequestBody StoreMapDTO dto)
            throws ServletException, IOException {
        logger.info("<<< url - insertstart >>>");
        
        System.out.println("<<< url - insertstart >>>");
      
        System.out.println(dto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
           
            service.insertStoreMap(dto);
            resultCode = "200";
            resultMsg = "StoreMapInform Success";
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
	@GetMapping("/EditStoreMap_Map/{itemCode}")
	public StoreMapDTO fetchStoreMapByID(@PathVariable int itemCode)
			throws ServletException, IOException {
		logger.info("<<< url 스토어 디데일 - fetchSampleByID >>>");
		System.out.println("itemCode : " + itemCode);
		
		
		return service.findByIdMap(itemCode);
	}
	
	// 스토어 수정
	@PutMapping("/EditStoreMap_Map/{itemCode}") // @RequestBody 누락시 부적합한 열 유형 뜸  //★gift_num???????
	   public Map<String, Object> storeUpdate(@PathVariable int itemCode, @RequestBody StoreMapDTO dto) 
	         throws ServletException, IOException{
	      logger.info("<<< url - storeUpdate >>>");
	      
	      String resultCode = "";
	      String resultMsg = "";
	      
	      Map<String, Object> map  = new HashMap<String, Object>();
	      
	      try {
	    	 dto.setItem_code(itemCode);
	         service.updateStoreMap(dto);
	            resultCode = "200";
	            resultMsg = "storeUpdate success";
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
	@DeleteMapping("/DeleteStoreMap_Map/{itemCode}") 
	   public Map<String, Object> sampleDelete(@PathVariable int itemCode) 
		         throws ServletException, IOException{
		      logger.info("<<< url - sampleUpdate >>>");
		      
		      String resultCode = "";
		      String resultMsg = "";
		      
		      Map<String, Object> map  = new HashMap<String, Object>();
		      
		      try {
		          service.deleteStoreMap(itemCode);

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


