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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.ArteMovieDTO;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.MovieDTO;
import springBoot.ict.movie.dto.NextMovieDTO;
import springBoot.ict.movie.dto.NowMovieDTO;
import springBoot.ict.movie.dto.StoreDTO;
import springBoot.ict.movie.service.ArteMovieServiceImpl;
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
	
	@Autowired
	private ArteMovieServiceImpl service3;
	
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
	
	// 영화 상영예정 list
		@GetMapping("/nextMovieList")
		public List<NextMovieDTO> nextMovieList(HttpServletRequest req,HttpServletResponse res,Model model)
	        throws ServletException, IOException {
	    logger.info("<<< url -> NextMovieList");
	    List<NextMovieDTO> list = service2.listMovie();
	    model.addAttribute("NextMovieList", list);
	    System.out.println("NextMovieList : " + list);
	    
	    return list;
	} 
		
	// 영화 아르떼 list
			@GetMapping("/arteMovieList")
			public List<ArteMovieDTO> arteMovieList(HttpServletRequest req,HttpServletResponse res,Model model)
		        throws ServletException, IOException {
		    logger.info("<<< url -> ArteMovieList");
		    List<ArteMovieDTO> list = service3.listMovie();
		    model.addAttribute("ArteMovieList", list);
		    System.out.println("ArteMovieList : " + list);
		    
		    return list;
		} 
			
	// 목록
	@GetMapping("/UpdateList") 
	public List<MovieDTO> UpdateList(Model model) 
		throws ServletException, IOException {
		
		logger.info("url - UpdateList");
		
		List<MovieDTO> list = service.UpdateList();
		model.addAttribute("list", list);
		
		return list;
	}

	 // 영화 추가
    @PostMapping("/UpdateInsert")
    public Map<String, Object> UpdateInsert(@RequestBody MovieDTO dto)
            throws ServletException, IOException {
        logger.info("<<< url - MovieInsert >>>");
        
        System.out.println("<<< url - UpdateInsert >>>");
      
        System.out.println(dto);
        
        
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
        	
            service.UpdateInsert(dto);
            resultCode = "200";
            resultMsg = "UpdateInsert Success";
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
	  
	 // 영화 상세페이지
	    @GetMapping("/MovieDetailList/{mov_id}") 
	    public Map<String, Object> MovieDetailList(@PathVariable("mov_id") int mov_id) 
	            throws ServletException, IOException {
	                
	        logger.info("url - MovieDetailList");
	        
	        System.out.println(mov_id);
	        String resultCode = "";
	        String resultMsg = "";
	        MovieDTO dto = null;
	        
	        Map<String, Object> map = new HashMap<String, Object>();
	        
	        try {
	            
	            dto = service.getMovieDetail(mov_id);
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
	        map.put("mov_id", mov_id);
	        map.put("dto", dto);
	        
	        return map;
	    }
	    
	 // 수정
		@PutMapping("/UpdateUpdate/{mov_id}") 
		public Map<String, Object> UpdateUpdate(@PathVariable("mov_id") int mov_id, @RequestBody MovieDTO dto) 
			throws ServletException, IOException {
			
			logger.info("url - UpdateUpdate");
			
			System.out.println(dto);
			
			String resultCode = "";
			String resultMsg = "";
			
			Map<String, Object> map = new HashMap<String, Object>();
			
			try {
				
				service.UpdateUpdate(dto);
				
				resultCode = "200";
				resultMsg = "UpdateInsert Success";			
//				
//				if(updateCnt == 1) {
//					
//					
//				}			
				
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
		
		// 삭제
		@DeleteMapping("/UpdateDelete/{mov_id}") 
		public Map<String, Object> UpdateDelete(@PathVariable("mov_id") int mov_id) 
			throws ServletException, IOException {
			
			logger.info("url - UpdateDelete");
			
			System.out.println(mov_id);
			String resultCode = "";
			String resultMsg = "";
			
			Map<String, Object> map = new HashMap<String, Object>();
			
			try {
				
				service.UpdateDelete(mov_id);			
				resultCode = "200";
				resultMsg = "UpdateInsert Success";
				
//				if(deleteCnt == 1) {
//					resultCode = "200";
//					resultMsg = "DiscountInsert Success";
//				}
			} 
			
			catch(Exception e) {
				
				resultCode = "400";
				resultMsg = e.getMessage();
				e.printStackTrace();
			}
			
			map.put("resultCode", resultCode);
			map.put("resultMsg", resultMsg);
			map.put("mov_id", mov_id);
			
			return map;
		}
		
	 		
        
}
