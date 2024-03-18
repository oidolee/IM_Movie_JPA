package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.MovieDTO;
import springBoot.ict.movie.dto.NowMovieDTO;

public interface NowMovieService {

	// 영화목록
	public List<NowMovieDTO> listMovie()
		throws ServletException, IOException;
	
	// 목록
		public List<NowMovieDTO> NowList()
			throws ServletException, IOException;
			
			
		// 영화 추가 
		public NowMovieDTO NowInsert(NowMovieDTO dto)
				throws ServletException, IOException;
		
		//영화 상세페이지
		NowMovieDTO getNowDetail(int now_id)
					throws ServletException, IOException;	
		 
		// 영화 수정
			public void NowUpdate(NowMovieDTO dto)
					throws ServletException, IOException;
			
		// 삭제
		public void NowDelete(int now_id)
				throws ServletException, IOException;

}
