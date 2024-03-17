package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.NextMovieRepository;
import springBoot.ict.movie.dto.NextMovieDTO;

@Service
public class NextMovieServiceImpl implements NextMovieService {
	
	@Autowired
	private NextMovieRepository dao;

	@Override
	public List<NextMovieDTO> listMovie() 
			throws ServletException, IOException {
		System.out.println("서비스 - listMovie");
		
		return dao.findAll();
	}

}
