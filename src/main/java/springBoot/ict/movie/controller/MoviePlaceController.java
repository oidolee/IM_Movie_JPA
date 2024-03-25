package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.MoviePlaceDTO;
import springBoot.ict.movie.service.MoviePlaceServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_5")
public class MoviePlaceController {
	@Autowired
	private MoviePlaceServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(MovieController.class);
	
	//상영시간표리스트
	@GetMapping("/timeList/{place_num}")
	public List<MoviePlaceDTO> TimeList(@PathVariable("place_num") int place_num)
	        throws ServletException, IOException {
		logger.info("<<< url -> timeList start");
	    List<MoviePlaceDTO> list = service.listTime(place_num);
	    System.out.println("TimeList : " + list);
	    
	    return list;
	} 
	
	@PostMapping("/timeLists") 
	public List<MoviePlaceDTO> getTimeList(@RequestBody MoviePlaceDTO dto)
	        throws ServletException, IOException {
		logger.info("<<< url -> timeList start dto :");
		System.out.println(dto);
	    List<MoviePlaceDTO> list = service.getlistTime(dto);
	    System.out.println("TimeList : " + list);
	    
	    return list;
	} 	
}
