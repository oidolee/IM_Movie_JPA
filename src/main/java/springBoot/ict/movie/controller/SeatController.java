package springBoot.ict.movie.controller;

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

import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.SeatDTO;
import springBoot.ict.movie.service.SeatServiceImpl;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_1")
public class SeatController {

	@Autowired
	private SeatServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(SeatController.class);
	
	// 예약 가능한 목록
	@GetMapping("/SeatList") 
	public List<SeatDTO> SeatList(Model model)
		throws ServletException, IOException {
		
		logger.info("url - SeatList");
		
		List<SeatDTO> list = service.SeatList();
		model.addAttribute("list", list);
		
		return list;
	}
	
	// 좌석 선택 후 예매하기 클릭 시 상태 변경 'r'
	@PutMapping("/SeatUpdate/{st_id}/{st_row}/{st_column}") 
	public Map<String, Object> SeatUpdate(@PathVariable int st_id, @PathVariable String st_row, @PathVariable String st_column) 
            throws ServletException, IOException {
        
		logger.info("url - SeatUpdate");
		
		String resultCode = "";
		String resultMsg = "";
		
        Map<String, Object> map = new HashMap<String, Object>();
        
        try {

            service.SeatUpdate(st_id, "r", st_row, st_column); 
            
            resultCode = "200";
			resultMsg = "DiscountInsert Success";	
        
        } catch (Exception e) {
            
        	resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
        }
        
        map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
        
        return map;
    }
	
}
