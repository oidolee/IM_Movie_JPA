package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springBoot.ict.movie.dao.ConsultAnswerRepository;
import springBoot.ict.movie.dao.ConsultRepository;
import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;

@Service
public class ConsultServiceImpl implements ConsultService {
	
	@Autowired
	private ConsultRepository csdao;
	@Autowired
	private ConsultAnswerRepository csadao;

   // 1:1문의 목록(관리자)
   @Override
   public List<ConsultDTO> ConsultList() 
         throws ServletException, IOException {
      System.out.println("ConsultServiceImpl - findAll");
      
      return csdao.findAll();
   }
   
   
   // 1:1 문의 목록(고객)
   @Override
   public List<ConsultDTO> ConsultCusList(String c_email) 
	         throws ServletException, IOException {
	      System.out.println("ConsultServiceImpl - ConsultCusList");
	      List<ConsultDTO> list = csdao.ConsultList(c_email);
	      return list;
	   }
   

   // 1:1문의 등록(고객)
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
   public ConsultAnswerDTO insertConsultAnswer(ConsultAnswerDTO csadto) 
         throws ServletException, IOException {
      System.out.println("ConsultServiceImpl - insertConsultAnswer");
      
      System.out.println("csadao.save(csadto) : " + csadao.save(csadto));
      
      return csadao.save(csadto);
   }

   // 1:1문의 답변 리스트
   @Override
   public List<ConsultAnswerDTO> selectConsultAnswer(int one_id) 
         throws ServletException, IOException {
      System.out.println("ConsultServiceImpl - selectConsultAnswer");
      List<ConsultAnswerDTO> list = csadao.selectConsult(one_id);
      
      return list;
   }

   // 1:1답변 등록 후 상태 업데이트
   @Override
   @Transactional
   public void updateCusConsultstate(int one_id) throws ServletException, IOException {
	    System.out.println("ConsultServiceImpl - updateCusConsultstate");
	    csdao.updateConsultState(one_id);
	}
   
   
   // 회원 정보 한건 찾기
//   @Override
//   public CustomerDTO selectCustomer(String email) 
//         throws ServletException, IOException {
//      System.out.println("ConsultServiceImpl - selectCustomer");
//      
//      
//      return csdao.selectCustomerById(email);
//   }
   
   
   
}