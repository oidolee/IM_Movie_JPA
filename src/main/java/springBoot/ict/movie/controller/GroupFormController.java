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
import springBoot.ict.movie.dto.GroupFormAnswerDTO;
import springBoot.ict.movie.dto.GroupFormDTO;
import springBoot.ict.movie.service.GroupFormServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_5")
public class GroupFormController {

	@Autowired
	private GroupFormServiceImpl service; 
	
	private static final Logger logger = LoggerFactory.getLogger(GroupFormController.class);
	
		//고객등록
		@PostMapping("/GroupInsert")
		public Map<String,Object> GroupInsert(@RequestBody GroupFormDTO dto)
			throws ServletException, IOException{
			logger.info("<<< url - GroupInsert >>>");
			
			System.out.println(dto);
			
			String resultCode = "";
			String resultMsg = "";
			
			Map<String,Object> map =  new HashMap<String, Object>();
			
			try {
				 service.GroupInsert(dto);
		            resultCode = "200";
		            resultMsg = "GroupInsert Success";
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
		
		//관리자목록
		@GetMapping("/GroupList") 
		public List<GroupFormDTO> GroupList(Model model) 
			throws ServletException, IOException {
			
			logger.info("url - GroupList");
			
			List<GroupFormDTO> list = service.GroupList();
			model.addAttribute("list", list);
			
			return list;
		}
			
		//고객목록
		@GetMapping("/cusGroupList/{c_email}") 
		public List<GroupFormDTO> groupDetail(@PathVariable(name="c_email") String c_email, Model model) 
			throws ServletException, IOException {
			
			logger.info("url - groupDetail");
			List<GroupFormDTO> list = service.GroupCusList(c_email);
			model.addAttribute("list", list);
			System.out.println(list);
			
			return list;
		}
		
		// 관리자 상세
	    @GetMapping("/select/{group_id}")
	    public Map<String, Object> selectGroupAnswer(@PathVariable(name="group_id") int group_id, Model model) 
	    		throws ServletException, IOException {
	        logger.info("<<< url -> groupAnswer");
	        
	        
	        Optional<GroupFormDTO> dto = null;
	        String resultCode = "";
	        String resultMsg = "";

	        Map<String, Object> map = new HashMap<String, Object>();

	        try {
	        	
	        	 dto = service.selectGroup(group_id);
	            resultCode = "200";
	            resultMsg = "CustomerInsert Success";
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
	    
	 // 관리자 답변 등록
	    @PostMapping("/saveAnswer")
	    public Map<String, Object> groupAnswerInsert(@RequestBody GroupFormAnswerDTO dto)
	            throws ServletException, IOException {
	        logger.info("<<< url - groupAnswerInsert >>>");
	        
	        System.out.println("<<< url - groupAnswerInsert >>>");
	      
	        System.out.println(dto);
	        
	        
	        String resultCode = "";
	        String resultMsg = "";

	        Map<String, Object> map = new HashMap<String, Object>();
	        
	        try {
	        	
	            service.insertGroupAnswer(dto);
	            resultCode = "200";
	            resultMsg = "Insert Success";
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
	    
	    //관리자 답변후 상태 업데이트
	    @PutMapping("/completeGroupAnswer/{group_id}")
	    public void completeGroupAnswer(@PathVariable(name="group_id") int group_id, Model model)
	    		throws ServletException, IOException{
	    	logger.info("<<< url -> groupAnswerList");
	    	System.out.println("group_id :" + group_id);
	    	service.updateCusGroupstate(group_id);
	    }
	    
	    // 관리자 답변 고객 리스트
	    @GetMapping("/groupAnswer/{group_id}")
	    public List<GroupFormAnswerDTO> groupAnswerList(@PathVariable(name="group_id") int group_id, Model model)
	            throws ServletException, IOException {
	        logger.info("<<< url -> groupAnswerList");
	        System.out.println("group_id :" + group_id);
	        List<GroupFormAnswerDTO> list= service.selectGroupAnswer(group_id);
	        model.addAttribute("list", list);
	        System.out.println("controller:" + list);
	        
	        return list;

	    }
	    

	
}
