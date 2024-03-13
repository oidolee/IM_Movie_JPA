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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.StoreDTO;
import springBoot.ict.movie.service.StoreServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_3")	
public class StoreController {
	
	@Autowired
	private StoreServiceImpl service;	
	
	private static final Logger logger = LoggerFactory.getLogger(StoreController.class);
	
	// 스토어 리스트 조회
	@GetMapping()	// ★페이지 이름 아니고, 어떤걸 쓰는거지???
	public List<StoreDTO> storeList(Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> storeList");
        List<StoreDTO> list = service.listStore();
        System.out.println("list : " + list);
        model.addAttribute("list", list); //★listStore_Admin list 설정
        
        
        return list;
    } 
	
	// 스토어 등록
    @PostMapping("/AddStore_Admin")
    public Map<String, Object> storeInsert(@RequestBody StoreDTO dto)
            throws ServletException, IOException {
        logger.info("<<< url - insertstart >>>");
        
        System.out.println("<<< url - insertstart >>>");
      
        System.out.println(dto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
        	
            service.insertStore(dto);
            resultCode = "200";
            resultMsg = "StoreInform Success";
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
	
	
	
	// 스토어 수정
	@PutMapping("/{item_code}") // @RequestBody 누락시 부적합한 열 유형 뜸  //★gift_num???????
	   public Map<String, Object> storeUpdate(@PathVariable int item_code, @RequestBody StoreDTO dto) 
	         throws ServletException, IOException{
	      logger.info("<<< url - storeUpdate >>>");
	      
	      String resultCode = "";
	      String resultMsg = "";
	      
	      Map<String, Object> map  = new HashMap<String, Object>();
	      
	      try {
	    	 dto.setItem_code(item_code);
	         int insertCnt = service.updateStore(dto);
	         if(insertCnt == 1) {
	            resultCode = "200";
	            resultMsg = "storeUpdate success";
	         }else {
	            resultCode = "500";
	            resultMsg = "storeUpdate fail";
	         }
	      }catch(Exception e) {
	         resultCode = "400";
	         resultMsg = e.getMessage();
	         e.printStackTrace();
	      }
	      
	      map.put("resultCode",resultCode);
	      map.put("resultMsg",resultMsg);
	      
	      System.out.println("[ storeUpdate 성공~~ ]");
	      
	      return map;
	   }
    
    
    
	// 스토어 삭제
	
	// 스토어 상세페이지
}
