package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.MovieRepository;
import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.MovieDTO;
import springBoot.ict.movie.dto.StoreDTO;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository dao;
		
	// 영화목록
	@Override
	public List<MovieDTO> listMovie() 
			throws ServletException, IOException {
		System.out.println("서비스 - listMovie");
		
		return dao.findAll();
	}
	
	// 목록
	@Override
	public List<MovieDTO> UpdateList() throws ServletException, IOException {
		
		System.out.println("서비스 - listMovie");
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 영화 추가 
	@Override
	public MovieDTO UpdateInsert(MovieDTO dto) 
			throws ServletException, IOException {
		System.out.println("서비스 - UpdateInsert");
		
	  return dao.save(dto);
	  
	}

	// 영화 상세페이지
	@Override
	public MovieDTO getMovieDetail(int movie_id) 
	        throws ServletException, IOException {
	    System.out.println("서비스 - getMovieDetail");
	    
	    MovieDTO dto = dao.findById(movie_id).orElse(null);
	    
	    System.out.println(movie_id);	
		System.out.println(dto);
	    
	    return dto;
	}

	//영화 수정
	@Override
	public void UpdateUpdate(MovieDTO dto) 
			throws ServletException, IOException {
		System.out.println("서비스 - UpdateUpdate");
		System.out.println(dto);
		
		dao.save(dto);
	}
	
	// 삭제
	@Override
	public void UpdateDelete(int movie_id) 
			throws ServletException, IOException {
		
		System.out.println("DiscountServiceImpl - UpdateDelete");
		
		System.out.println(movie_id);
		
		dao.deleteById(movie_id);
	}

	

}
