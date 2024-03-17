package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.MovieDTO;
import springBoot.ict.movie.dto.NextMovieDTO;
import springBoot.ict.movie.dto.NowMovieDTO;
import springBoot.ict.movie.service.MovieServiceImpl;
import springBoot.ict.movie.service.NextMovieServiceImpl;
import springBoot.ict.movie.service.NowMovieServiceImpl;


@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_5")
public class MovieController {
	@Autowired
	private MovieServiceImpl service;
	
	@Autowired
	private NowMovieServiceImpl service1;
	
	@Autowired
	private NextMovieServiceImpl service2;
	
	private static final Logger logger = LoggerFactory.getLogger(MovieController.class);
	
	// 영화 홈 list
	@GetMapping("/movieList")
	public List<MovieDTO> MovieList(HttpServletRequest req,HttpServletResponse res,Model model)
	        throws ServletException, IOException {
	    logger.info("<<< url -> MovieList");
	    List<MovieDTO> list = service.listMovie();
	    model.addAttribute("MovieList", list);
	    System.out.println("MovieList : " + list);
	    
	    return list;
	} 

	// 영화 현재 list
	@GetMapping("/nowMovieList")
	public List<NowMovieDTO> NowMovieList(HttpServletRequest req,HttpServletResponse res,Model model)
	        throws ServletException, IOException {
	    logger.info("<<< url -> NowMovieList");
	    List<NowMovieDTO> list = service1.listMovie();
	    model.addAttribute("NowMovieList", list);
	    System.out.println("NowMovieList : " + list);
	    
	    return list;
	} 
	
	// 영화 현재 list
		@GetMapping("/nextMovieList")
		public List<NextMovieDTO> nextMovieList(HttpServletRequest req,HttpServletResponse res,Model model)
	        throws ServletException, IOException {
	    logger.info("<<< url -> NextMovieList");
	    List<NextMovieDTO> list = service2.listMovie();
	    model.addAttribute("NextMovieList", list);
	    System.out.println("NextMovieList : " + list);
	    
	    return list;
	} 
	
 // 영화 추가
    @PostMapping("/saveMovie")
    public Map<String, Object> MovieInsert(@RequestBody MovieDTO dto)
            throws ServletException, IOException {
        logger.info("<<< url - MovieInsert >>>");
        
        System.out.println("<<< url - MovieInsert >>>");
      
        System.out.println(dto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
        	
            service.insertMovie(dto);
            resultCode = "200";
            resultMsg = "MovieInsert Success";
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
    
    
//    // 상세페이지
//    @GetMapping("/select/{one_id}")
//    public Map<String, Object> selectConsultAnswer(@PathVariable(name="one_id") int one_id, Model model) 
//    		throws ServletException, IOException {
//        logger.info("<<< url -> consultAnswer");
//        
//        
//        Optional<ConsultDTO> csdto = null;
//        String resultCode = "";
//        String resultMsg = "";
//
//        Map<String, Object> map = new HashMap<String, Object>();
//
//        try {
//        	
//        	 csdto = service.selectConsult(one_id);
//            resultCode = "200";
//            resultMsg = "CustomerInform Success";
//        } catch(Exception e) {
//            resultCode = "400";
//            resultMsg = e.getMessage();
//            e.printStackTrace();
//        }
//        map.put("resultCode", resultCode);
//        map.put("resultMsg", resultMsg);
//        map.put("csdto", csdto);
//        
//        return map;
//
//}
