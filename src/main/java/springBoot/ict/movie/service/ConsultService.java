package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.CustomerDTO;

public interface ConsultService {
	
	// 1:1문의 목록
	public List<ConsultDTO> ConsultList()
			throws ServletException, IOException;
	
	// 1:1문의 등록 
	public ConsultDTO insertConsult(ConsultDTO csdto)
			throws ServletException, IOException;
	

	// 1:1문의 등록 1건 찾기
	public Optional<ConsultDTO> selectConsult(int one_id)
			throws ServletException, IOException;
	
	// 1:1문의 답변 등록
	public ConsultAnswerDTO insertConsultAnswer(ConsultAnswerDTO csadto)
			throws ServletException, IOException;
	
	// 1:1문의 답변 리스트
	public List<ConsultAnswerDTO> selectConsultAnswer(int one_id) 
			throws ServletException, IOException;
			
	
//	// 회원정보 1건 select
//	public CustomerDTO selectCustomer(String email) 
//			throws ServletException, IOException;
}
