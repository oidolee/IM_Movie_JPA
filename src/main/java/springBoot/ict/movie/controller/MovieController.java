package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
import springBoot.ict.movie.dto.MovieDTO;
import springBoot.ict.movie.dto.NextMovieDTO;
import springBoot.ict.movie.dto.NowMovieDTO;
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

	 // 영화 홈  추가
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
    @GetMapping("/MovieDetailList/{movie_id}") 
    public Map<String, Object> MovieDetailList(@PathVariable("movie_id") int movie_id) 
            throws ServletException, IOException {
                
        logger.info("url - MovieDetailList");
        
        System.out.println(movie_id);
        String resultCode = "";
        String resultMsg = "";
        MovieDTO dto = null;
        
        Map<String, Object> map = new HashMap<String, Object>();
        
        try {
            
            dto = service.getMovieDetail(movie_id);
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
        map.put("movie_id", movie_id);
        map.put("dto", dto);
        
        return map;
    }
	    
	 // 수정
		@PutMapping("/UpdateUpdate/{movie_id}") 
		public Map<String, Object> UpdateUpdate(@PathVariable("movie_id") int movie_id, @RequestBody MovieDTO dto) 
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
		@DeleteMapping("/UpdateDelete/{movie_id}") 
		public Map<String, Object> UpdateDelete(@PathVariable("movie_id") int movie_id) 
			throws ServletException, IOException {
			
			logger.info("url - UpdateDelete");
			
			System.out.println(movie_id);
			String resultCode = "";
			String resultMsg = "";
			
			Map<String, Object> map = new HashMap<String, Object>();
			
			try {
				
				service.UpdateDelete(movie_id);			
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
			map.put("mov_id", movie_id);
			
			return map;
		}
		
		
		// 현재목록
		@GetMapping("/NowList") 
		public List<NowMovieDTO> NowList(Model model) 
			throws ServletException, IOException {
			
			logger.info("url - UpdateList");
			
			List<NowMovieDTO> list = service1.NowList();
			model.addAttribute("list", list);
			
			return list;
		}

		 // 현재영화 추가
	    @PostMapping("/NowInsert")
	    public Map<String, Object> NowInsert(@RequestBody NowMovieDTO dto)
	            throws ServletException, IOException {
	        logger.info("<<< url - NowInsert >>>");
	        
	        System.out.println("<<< url - NowInsert >>>");
	      
	        System.out.println(dto);
	        
	        
	        String resultCode = "";
	        String resultMsg = "";

	        Map<String, Object> map = new HashMap<String, Object>();

	        try {
	        	
	            service1.NowInsert(dto);
	            resultCode = "200";
	            resultMsg = "NowInsert Success";
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
		  
		 // 현재영화 상세페이지
		    @GetMapping("/NowDetailList/{now_id}") 
		    public Map<String, Object> NowDetailList(@PathVariable("now_id") int now_id) 
		            throws ServletException, IOException {
		                
		        logger.info("url - NowDetailList");
		        
		        System.out.println(now_id);
		        String resultCode = "";
		        String resultMsg = "";
		        NowMovieDTO dto = null;
		        
		        Map<String, Object> map = new HashMap<String, Object>();
		        
		        try {
		            
		            dto = service1.getNowDetail(now_id);
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
		        map.put("now_id", now_id);
		        map.put("dto", dto);
		        
		        return map;
		    }
		    
		 // 현재수정
			@PutMapping("/NowUpdate/{now_id}") 
			public Map<String, Object> NowUpdate(@PathVariable("now_id") int now_id, @RequestBody NowMovieDTO dto) 
				throws ServletException, IOException {
				
				logger.info("url - NowUpdate");
				
				System.out.println(dto);
				
				String resultCode = "";
				String resultMsg = "";
				
				Map<String, Object> map = new HashMap<String, Object>();
				
				try {
					
					service1.NowUpdate(dto);
					
					resultCode = "200";
					resultMsg = "NowInsert Success";			

					
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
			
			// 현재삭제
			@DeleteMapping("/NowDelete/{now_id}") 
			public Map<String, Object> NowDelete(@PathVariable("now_id") int now_id) 
				throws ServletException, IOException {
				
				logger.info("url - NowDelete");
				
				System.out.println(now_id);
				String resultCode = "";
				String resultMsg = "";
				
				Map<String, Object> map = new HashMap<String, Object>();
				
				try {
					
					service1.NowDelete(now_id);			
					resultCode = "200";
					resultMsg = "NowInsert Success";
					
				} 
				
				catch(Exception e) {
					
					resultCode = "400";
					resultMsg = e.getMessage();
					e.printStackTrace();
				}
				
				map.put("resultCode", resultCode);
				map.put("resultMsg", resultMsg);
				map.put("now_id", now_id);
				
				return map;
			}
			
			// 새목록
			@GetMapping("/NextList") 
			public List<NextMovieDTO> NextList(Model model) 
				throws ServletException, IOException {
				
				logger.info("url - UpdateList");
				
				List<NextMovieDTO> list = service2.NextList();
				model.addAttribute("list", list);
				
				return list;
			}

			 // 새영화 추가
		    @PostMapping("/NextInsert")
		    public Map<String, Object> NextInsert(@RequestBody NextMovieDTO dto)
		            throws ServletException, IOException {
		        logger.info("<<< url - NextInsert >>>");
		        
		        System.out.println("<<< url - NextInsert >>>");
		      
		        System.out.println(dto);
		        
		        
		        String resultCode = "";
		        String resultMsg = "";

		        Map<String, Object> map = new HashMap<String, Object>();

		        try {
		        	
		            service2.NextInsert(dto);
		            resultCode = "200";
		            resultMsg = "NextInsert Success";
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
			  
			 // 새영화 상세페이지
			    @GetMapping("/NextDetailList/{next_id}") 
			    public Map<String, Object> NextDetailList(@PathVariable("next_id") int next_id) 
			            throws ServletException, IOException {
			                
			        logger.info("url - NextDetailList");
			        
			        System.out.println(next_id);
			        String resultCode = "";
			        String resultMsg = "";
			        NextMovieDTO dto = null;
			        
			        Map<String, Object> map = new HashMap<String, Object>();
			        
			        try {
			            
			            dto = service2.getNextDetail(next_id);
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
			        map.put("mov_id", next_id);
			        map.put("dto", dto);
			        
			        return map;
			    }
			    
			 // 새수정
				@PutMapping("/NextUpdate/{next_id}") 
				public Map<String, Object> NextUpdate(@PathVariable("next_id") int next_id, @RequestBody NextMovieDTO dto) 
					throws ServletException, IOException {
					
					logger.info("url - NextUpdate");
					
					System.out.println(dto);
					
					String resultCode = "";
					String resultMsg = "";
					
					Map<String, Object> map = new HashMap<String, Object>();
					
					try {
						
						service2.NextUpdate(dto);
						
						resultCode = "200";
						resultMsg = "NextInsert Success";			

						
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
				
				// 새삭제
				@DeleteMapping("/NextDelete/{next_id}") 
				public Map<String, Object> NextDelete(@PathVariable("next_id") int next_id) 
					throws ServletException, IOException {
					
					logger.info("url - NextDelete");
					
					System.out.println(next_id);
					String resultCode = "";
					String resultMsg = "";
					
					Map<String, Object> map = new HashMap<String, Object>();
					
					try {
						
						service2.NextDelete(next_id);			
						resultCode = "200";
						resultMsg = "NextInsert Success";
						
					} 
					
					catch(Exception e) {
						
						resultCode = "400";
						resultMsg = e.getMessage();
						e.printStackTrace();
					}
					
					map.put("resultCode", resultCode);
					map.put("resultMsg", resultMsg);
					map.put("now_id", next_id);
					
					return map;
				}
				
				// 아르떼목록
				@GetMapping("/ArteList") 
				public List<ArteMovieDTO> ArteList(Model model) 
					throws ServletException, IOException {
					
					logger.info("url - UpdateList");
					
					List<ArteMovieDTO> list = service3.ArteList();
					model.addAttribute("list", list);
					
					return list;
				}

				 // 아르떼영화 추가
			    @PostMapping("/ArteInsert")
			    public Map<String, Object> ArteInsert(@RequestBody ArteMovieDTO dto)
			            throws ServletException, IOException {
			        logger.info("<<< url - ArteInsert >>>");
			        
			        System.out.println("<<< url - ArteInsert >>>");
			      
			        System.out.println(dto);
			        
			        
			        String resultCode = "";
			        String resultMsg = "";

			        Map<String, Object> map = new HashMap<String, Object>();

			        try {
			        	
			            service3.ArteInsert(dto);
			            resultCode = "200";
			            resultMsg = "ArteInsert Success";
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
				  
				 // 아르떼영화 상세페이지
				    @GetMapping("/ArteDetailList/{arte_id}") 
				    public Map<String, Object> ArteDetailList(@PathVariable("arte_id") int arte_id) 
				            throws ServletException, IOException {
				                
				        logger.info("url - ArteDetailList");
				        
				        System.out.println(arte_id);
				        String resultCode = "";
				        String resultMsg = "";
				        ArteMovieDTO dto = null;
				        
				        Map<String, Object> map = new HashMap<String, Object>();
				        
				        try {
				            
				            dto = service3.getArteDetail(arte_id);
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
				        map.put("arte_id", arte_id);
				        map.put("dto", dto);
				        
				        return map;
				    }
				    
				 // 아르떼수정
					@PutMapping("/ArteUpdate/{arte_id}") 
					public Map<String, Object> NextUpdate(@PathVariable("arte_id") int arte_id, @RequestBody ArteMovieDTO dto) 
						throws ServletException, IOException {
						
						logger.info("url - ArteUpdate");
						
						System.out.println(dto);
						
						String resultCode = "";
						String resultMsg = "";
						
						Map<String, Object> map = new HashMap<String, Object>();
						
						try {
							
							service3.ArteUpdate(dto);
							
							resultCode = "200";
							resultMsg = "ArteInsert Success";			

							
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
					
					// 아르떼삭제
					@DeleteMapping("/ArteDelete/{arte_id}") 
					public Map<String, Object> ArteDelete(@PathVariable("arte_id") int arte_id) 
						throws ServletException, IOException {
						
						logger.info("url - ArteDelete");
						
						System.out.println(arte_id);
						String resultCode = "";
						String resultMsg = "";
						
						Map<String, Object> map = new HashMap<String, Object>();
						
						try {
							
							service3.ArteDelete(arte_id);			
							resultCode = "200";
							resultMsg = "ArteInsert Success";
							
						} 
						
						catch(Exception e) {
							
							resultCode = "400";
							resultMsg = e.getMessage();
							e.printStackTrace();
						}
						
						map.put("resultCode", resultCode);
						map.put("resultMsg", resultMsg);
						map.put("arte_id", arte_id);
						
						return map;
					}
			
		
	 		
        
}
