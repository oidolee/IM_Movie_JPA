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

		// 목록
		@Override
		public List<NowMovieDTO> NowList() 
				throws ServletException, IOException {
			System.out.println("서비스 - NowList");
			System.out.println(dao.findAll());
			
			return dao.findAll();
		}

		// 영화 추가
		@Override
		public NowMovieDTO NowInsert(NowMovieDTO dto) 
				throws ServletException, IOException {
			System.out.println("서비스 - NowInsert");
			
			return dao.save(dto);
		}

		// 영화 상세페이지
		@Override
		public NowMovieDTO getNowDetail(int now_id) 
				throws ServletException, IOException {
			System.out.println("서비스 - getNowDetail");
			
			NowMovieDTO dto = dao.findById(now_id).orElse(null);
			
			System.out.println(now_id);	
			System.out.println(dto);
			
			return dto;
		}

		//영화 수정
		@Override
		public void NowUpdate(NowMovieDTO dto) 
				throws ServletException, IOException {
			System.out.println("서비스 - NowUpdate");
			System.out.println(dto);
			
			dao.save(dto);
			
		}

		// 삭제
		@Override
		public void NowDelete(int now_id) throws ServletException, IOException {
			System.out.println("서비스 - NowDelete");
			
			System.out.println(now_id);
			
			dao.deleteById(now_id);
			
		}

	}
