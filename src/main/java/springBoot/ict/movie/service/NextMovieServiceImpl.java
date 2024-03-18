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

	// 영화목록
	@Override
	public List<NextMovieDTO> listMovie() 
			throws ServletException, IOException {
		System.out.println("서비스 - listMovie");
		
		return dao.findAll();
	}

	// 목록
	@Override
	public List<NextMovieDTO> NextList() throws ServletException, IOException {
		System.out.println("서비스 - NextList");
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 영화 추가
	@Override
	public NextMovieDTO NextInsert(NextMovieDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - NextInsert");
		
		return dao.save(dto);
	}

	// 영화 상세페이지
	@Override
	public NextMovieDTO getNextDetail(int next_id) throws ServletException, IOException {
		System.out.println("서비스 - getNextDetail");
		
		NextMovieDTO dto = dao.findById(next_id).orElse(null);
		
		System.out.println(next_id);	
		System.out.println(dto);
		
		return dto;
	}

	//영화 수정
	@Override
	public void NextUpdate(NextMovieDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - NextUpdate");
		System.out.println(dto);
		
		dao.save(dto);
		
	}

	// 삭제
	@Override
	public void NextDelete(int next_id) throws ServletException, IOException {
		System.out.println("서비스 - NextDelete");
		
		System.out.println(next_id);
		
		dao.deleteById(next_id);
		
	}

}
