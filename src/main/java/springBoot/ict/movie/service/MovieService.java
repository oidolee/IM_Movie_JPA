package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.DiscountDTO;
import springBoot.ict.movie.dto.MovieDTO;


public interface MovieService {

	// 영화목록
		public List<MovieDTO> listMovie()
				throws ServletException, IOException;
		
	// 목록
	public List<MovieDTO> UpdateList()
		throws ServletException, IOException;
		
		
	// 영화 추가 
	public MovieDTO UpdateInsert(MovieDTO dto)
			throws ServletException, IOException;
	
	//영화 상세페이지
	 MovieDTO getMovieDetail(int movie_id)
				throws ServletException, IOException;	
	 
	// 영화 수정
		public void UpdateUpdate(MovieDTO dto)
				throws ServletException, IOException;
		
	// 삭제
	public void UpdateDelete(int movie_id)
			throws ServletException, IOException;

		
}
