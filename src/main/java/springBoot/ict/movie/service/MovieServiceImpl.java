package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.MovieRepository;
import springBoot.ict.movie.dto.MovieDTO;

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

	// 영화 추가 
	@Override
	public MovieDTO insertMovie(MovieDTO dto) 
			throws ServletException, IOException {
		System.out.println("서비스 - insertMovie");
		
	  return dao.save(dto);
		
	}

}
