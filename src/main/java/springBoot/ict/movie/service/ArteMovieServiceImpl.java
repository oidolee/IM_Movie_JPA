package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.ArteMovieRepository;
import springBoot.ict.movie.dto.ArteMovieDTO;

@Service
public class ArteMovieServiceImpl  implements ArteMovieService  {
	
	@Autowired
	private ArteMovieRepository dao;
		
	// 영화목록
		@Override
		public List<ArteMovieDTO> listMovie() 
				throws ServletException, IOException {
			System.out.println("서비스 - listMovie");
			
			return dao.findAll();
		}

}
