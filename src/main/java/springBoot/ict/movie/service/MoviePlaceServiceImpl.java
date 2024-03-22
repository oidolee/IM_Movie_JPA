package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.MoviePlaceRepository;
import springBoot.ict.movie.dto.MoviePlaceDTO;
import springBoot.ict.movie.dto.StoreMapDTO;

@Service
public class MoviePlaceServiceImpl implements MoviePlaceService {

	@Autowired
	private MoviePlaceRepository dao;
	
	// 상영시간표목록
	@Override
	public List<MoviePlaceDTO> listTime(int place_num) 
			throws ServletException, IOException {
		System.out.println("서비스 - listTime place_num: " + place_num);
		
		return dao.findAllByPlaceNum(place_num);
	}


	
	

}
