package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.MoviePlaceRepository;
import springBoot.ict.movie.dto.MoviePlaceDTO;

@Service
public class MoviePlaceServiceImpl implements MoviePlaceService {

	@Autowired
	private MoviePlaceRepository dao;
	
	// 상영시간표목록
	@Override
	public List<MoviePlaceDTO> listTime() 
			throws ServletException, IOException {
		System.out.println("서비스 - listTime");
		
		return dao.findAll();
	}
	
	

}
