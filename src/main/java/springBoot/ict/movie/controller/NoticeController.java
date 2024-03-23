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

import springBoot.ict.movie.dto.NoticeDTO;
import springBoot.ict.movie.service.NoticeServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_5")
public class NoticeController {
	
	@Autowired
	private NoticeServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(NoticeController.class);
	
	// 공지목록
		@GetMapping("/NoticeList") 
		public List<NoticeDTO> NoticeList(Model model) 
			throws ServletException, IOException {
			
			logger.info("url - NoticeList");
			
			List<NoticeDTO> list = service.NoticeList();
			model.addAttribute("list", list);
			
			return list;
		}

		//공지등록
		@PostMapping("/NoticeInsert")
		public Map<String, Object> NoticeInsert(@RequestBody NoticeDTO dto) {
		    logger.info("<<< url - NoticeInsert >>>");
		    
		    Map<String, Object> map = new HashMap<String, Object>();
		    String resultCode = "";
		    String resultMsg = "";

		    try {
		        // 서비스를 통해 공지사항을 등록합니다.
		        service.NoticeInsert(dto);
		        resultCode = "200";
		        resultMsg = "NoticeInsert Success";
		    } catch(Exception e) {
		        resultCode = "400";
		        resultMsg = e.getMessage();
		        e.printStackTrace();
		    }

		    // 결과를 Map에 담아 반환합니다.
		    map.put("resultCode", resultCode);
		    map.put("resultMsg", resultMsg);
		    map.put("dto", dto);

		    return map;
		}
	  
    //공지 상세페이지
    @GetMapping("/getNoticeDetail/{notice_num}") 
    public Map<String, Object> getNoticeDetail(@PathVariable("notice_num") int notice_num) 
            throws ServletException, IOException {
                
        logger.info("url - getNoticeDetail");
        
        System.out.println(notice_num);
        String resultCode = "";
        String resultMsg = "";
        NoticeDTO dto = null;
        
        Map<String, Object> map = new HashMap<String, Object>();
        
        try {
            
            dto = service.getNoticeDetail(notice_num);
            resultCode = "200";
            resultMsg = "Success";
        } 
        
        catch(Exception e) {
            
            resultCode = "400";
            resultMsg = e.getMessage();
            e.printStackTrace();
        }
        
        map.put("resultCode", resultCode);
        map.put("resultMsg", resultMsg);
        map.put("notice_num", notice_num);
        map.put("dto", dto);
        
        return map;
    }
	    
 // 공지 수정
		@PutMapping("/NoticeUpdate/{notice_num}") 
		public Map<String, Object> NoticeUpdate(@PathVariable("notice_num") int notice_num, @RequestBody NoticeDTO dto) 
			throws ServletException, IOException {
			
			logger.info("url - NoticeUpdate");
			
			System.out.println(dto);
			
			String resultCode = "";
			String resultMsg = "";
			
			Map<String, Object> map = new HashMap<String, Object>();
			
			try {
				
				service.NoticeUpdate(dto);
				
				resultCode = "200";
				resultMsg = "UpdateInsert Success";			
//					
//					if(updateCnt == 1) {
//						
//						
//					}			
				
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
		
		// 공지 삭제
		@DeleteMapping("/NoticeDelete/{notice_num}") 
		public Map<String, Object> NoticeDelete(@PathVariable("notice_num") int notice_num) 
			throws ServletException, IOException {
			
			logger.info("url - NoticeDelete");
			
			System.out.println(notice_num);
			String resultCode = "";
			String resultMsg = "";
			
			Map<String, Object> map = new HashMap<String, Object>();
			
			try {
				
				service.NoticeDelete(notice_num);			
				resultCode = "200";
				resultMsg = "UpdateInsert Success";
			}
			
			catch(Exception e) {
				
				resultCode = "400";
				resultMsg = e.getMessage();
				e.printStackTrace();
			}
			
			map.put("resultCode", resultCode);
			map.put("resultMsg", resultMsg);
			map.put("notice_num", notice_num);
			
			return map;
		}
		

}
