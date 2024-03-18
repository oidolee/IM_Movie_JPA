package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.NextMovieDTO;
import springBoot.ict.movie.dto.NowMovieDTO;


public interface NextMovieService {
	
	// 영화목록
	public List<NextMovieDTO> listMovie()
			throws ServletException, IOException;
	
	// 목록
	public List<NextMovieDTO> NextList()
		throws ServletException, IOException;
		
		
	// 영화 추가 
	public NextMovieDTO NextInsert(NextMovieDTO dto)
			throws ServletException, IOException;
	
	//영화 상세페이지
	NextMovieDTO getNextDetail(int next_id)
				throws ServletException, IOException;	
	 
	// 영화 수정
	public void NextUpdate(NextMovieDTO dto)
			throws ServletException, IOException;
		
	// 삭제
	public void NextDelete(int next_id)
			throws ServletException, IOException;

}
