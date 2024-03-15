//package springBoot.ict.movie.controller;
//
//import java.io.IOException;
//import java.util.HashMap;
//import java.util.Map;
//
//import javax.servlet.ServletException;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import springBoot.ict.movie.dto.GroupFormDTO;
//import springBoot.ict.movie.service.GroupFormServiceImpl;
//
//@CrossOrigin(origins="**", maxAge=3600)
//@RestController
//@RequestMapping(value="/page_5")
//public class GroupFormController {
//
//	@Autowired
//	private GroupFormServiceImpl service; 
//	
//	private static final Logger logger = LoggerFactory.getLogger(GroupFormController.class);
//	
//		//게시판목록
//		@PostMapping("/save")
//		public Map<String,Object> groupformInsert(@RequestBody GroupFormDTO dto)
//			throws ServletException, IOException{
//			logger.info("<<< url - groupformInsert >>>");
//			
//			System.out.println(dto);
//			
//			String resultNum = "";
//			String resultMes = "";
//			
//			Map<String,Object> map =  new HashMap<String, Object>();
//			
//			try {
//				service.insertGroupForm(dto);
//				
//			}
//				return null;
//			
//	}
//	
//}
