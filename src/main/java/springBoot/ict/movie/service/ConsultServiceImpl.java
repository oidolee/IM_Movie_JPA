package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

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
	private CustomerRepository cdao;

	// 1:1문의 목록
	@Override
	public List<ConsultDTO> ConsultList() 
			throws ServletException, IOException {
		System.out.println("ConsultServiceImpl - findAll");
		
		return csdao.findAll();
	}

	// 1:1문의 등록
	@Override
	public ConsultDTO insertConsult(ConsultDTO csdto) 
			throws ServletException, IOException {
		System.out.println("ConsultServiceImpl - insertConsult");
		
		return csdao.save(csdto);
	}

	
	// 1:1문의 등록 1건 찾기
	@Override
	public Optional<ConsultDTO> selectConsult(int one_id) 
			throws ServletException, IOException {
		System.out.println("ConsultServiceImpl - selectConsult");
		
		Optional<ConsultDTO> csdto = csdao.findById(one_id);
		return csdto;
	}

	// 1:1문의 답변 등록
	@Override
	public void insertConsultAnswer(ConsultAnswerDTO csadto) 
			throws ServletException, IOException {
		System.out.println("ConsultServiceImpl - insertConsultAnswer");
		
		// TODO Auto-generated method stub
		
	}

	// 1:1문의 답변 1건 찾기
	@Override
	public ConsultAnswerDTO selectConsultAnswer(int one_id) 
			throws ServletException, IOException {
		System.out.println("ConsultServiceImpl - selectConsultAnswer");
		
		
		return csdao.ConsultAnswer(one_id);
	}

	
	
	// 회원 정보 한건 찾기
//	@Override
//	public CustomerDTO selectCustomer(String email) 
//			throws ServletException, IOException {
//		System.out.println("ConsultServiceImpl - selectCustomer");
//		
//		
//		return csdao.selectCustomerById(email);
//	}
	
	
	
}
