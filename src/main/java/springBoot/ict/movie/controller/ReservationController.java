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

import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.MoviePlaceDTO;
import springBoot.ict.movie.dto.ReservationDTO;
import springBoot.ict.movie.service.ReservationServiceImpl;


@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_1")
public class ReservationController {

	@Autowired
	private ReservationServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(ReservationController.class);
		
	// 영화 목록
    @GetMapping("/ReservationList")
    public List<MoviePlaceDTO> ReservationList(Model model)
            throws ServletException, IOException {
    	
        logger.info("url - ReservationList");
        
        List<MoviePlaceDTO> list = service.ReservationList();
        model.addAttribute("list", list);
        
        return list;
    }
    
    // 예약 정보 추가
 	@PostMapping("/ReservationInsert") 
 	public Map<String, Object> ReservationInsert(@RequestBody ReservationDTO dto) 
 		throws ServletException, IOException {
 		
 		logger.info("url - ReservationInsert");
 		
 		System.out.println(dto);
 		
 		String resultCode = "";
 		String resultMsg = "";
 		
 		Map<String, Object> map = new HashMap<String, Object>();
 		
 		try {
 			
 			service.ReservationInsert(dto);
 			resultCode = "200";
 			resultMsg = "ReservationInsert Success";
 			
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


}

