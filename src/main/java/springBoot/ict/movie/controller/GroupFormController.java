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
			
	
	
}
