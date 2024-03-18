package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.ArteMovieDTO;
import springBoot.ict.movie.dto.NextMovieDTO;


public interface ArteMovieService {

	// 영화목록
		public List<ArteMovieDTO> listMovie()
				throws ServletException, IOException;
	
	// 목록
	public List<ArteMovieDTO> ArteList()
		throws ServletException, IOException;
		
		
	// 영화 추가 
	public ArteMovieDTO ArteInsert(ArteMovieDTO dto)
			throws ServletException, IOException;
	
	//영화 상세페이지
	ArteMovieDTO getArteDetail(int arte_id) 
			throws ServletException, IOException; 
	 
	// 영화 수정
	public void ArteUpdate(ArteMovieDTO dto)
			throws ServletException, IOException;
		
	// 삭제
	public void ArteDelete(int arte_id)
			throws ServletException, IOException;
}
