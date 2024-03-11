package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.CustomerDTO;

public interface ConsultService {
	
	// 1:1문의 목록
	public List<ConsultDTO> ConsultList()
			throws ServletException, IOException;
	
	// 1:1문의 등록 
	public void insertConsult(ConsultDTO csdto)
			throws ServletException, IOException;

	// 1:1문의 등록 1건 찾기
	public CustomerDTO selectConsult(ConsultDTO csdto)
			throws ServletException, IOException;
	
	// 1:1문의 답변 등록
	public void insertConsultAnswer(ConsultAnswerDTO csadto)
			throws ServletException, IOException;
	
	// 1:1문의 답변 1건 찾기
		public CustomerDTO selectConsultAnswer(ConsultDTO csdto)
				throws ServletException, IOException;
}
