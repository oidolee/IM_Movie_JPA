package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.ConsultRepository;
import springBoot.ict.movie.dao.CustomerRepository;
import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.CustomerDTO;

@Service
public class ConsultServiceImpl implements ConsultService {
	
	@Autowired
	private ConsultRepository csdao;

	// 1:1문의 목록
	@Override
	public List<ConsultDTO> ConsultList() 
			throws ServletException, IOException {
		
		return csdao.findAll();
	}

	// 1:1문의 등록
	@Override
	public ConsultDTO insertConsult(ConsultDTO csdto) 
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		return null;
	}

	// 1:1문의 등록 1건 찾기
	@Override
	public ConsultDTO selectConsult(ConsultDTO csdto) 
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		return null;
	}

	// 1:1문의 답변 등록
	@Override
	public void insertConsultAnswer(ConsultAnswerDTO csadto) 
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

	// 1:1문의 답변 1건 찾기
	@Override
	public CustomerDTO selectConsultAnswer(ConsultDTO csdto) 
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
}
