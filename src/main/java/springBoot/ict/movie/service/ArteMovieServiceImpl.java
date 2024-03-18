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

		// 목록
		@Override
		public List<ArteMovieDTO> ArteList() 
				throws ServletException, IOException {
			System.out.println("서비스 - ArteList");
			
			return dao.findAll();
		}

		// 영화 추가 
		@Override
		public ArteMovieDTO ArteInsert(ArteMovieDTO dto)
				throws ServletException, IOException {
			System.out.println("서비스 - ArteInsert");
			
			return dao.save(dto);
		}

		//영화 상세페이지
		@Override
		public ArteMovieDTO getArteDetail(int arte_id) 
				throws ServletException, IOException{
			System.out.println("서비스 - getArteDetail");
			
			ArteMovieDTO dto = dao.findById(arte_id).orElse(null);
			
			System.out.println(arte_id);	
			System.out.println(dto);
			
			return dto;
		}

		// 영화 수정
		@Override
		public void ArteUpdate(ArteMovieDTO dto) 
				throws ServletException, IOException {
			System.out.println("서비스 - ArteUpdate");
			System.out.println(dto);
			
			dao.save(dto);
			
		}

		// 삭제
		@Override
		public void ArteDelete(int arte_id) 
				throws ServletException, IOException {
			System.out.println("서비스 - ArteDelete");
			
			System.out.println(arte_id);
			
			dao.deleteById(arte_id);
			
		}

}
