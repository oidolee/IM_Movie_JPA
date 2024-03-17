package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.NowMovieRepository;
import springBoot.ict.movie.dto.NowMovieDTO;

@Service
public class NowMovieServiceImpl implements NowMovieService {

	@Autowired
	private NowMovieRepository dao;
		
	// 영화목록
		@Override
		public List<NowMovieDTO> listMovie() 
				throws ServletException, IOException {
			System.out.println("서비스 - listMovie");
			
			return dao.findAll();
		}

	}
