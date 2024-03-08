package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.CustomerRepository;
import springBoot.ict.movie.dto.CustomerDTO;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository dao;
	
	
	// 고객 목록ㄴ
	@Override
	public List<CustomerDTO> listcustomer() 
			throws ServletException, IOException {
		System.out.println("CustomerServiceImpl - listAll");
		
		return dao.findAll();
	}

	// 회원 가입
	@Override
	public void insertCustomer(CustomerDTO dto) 
			throws ServletException, IOException {
		System.out.println("CustomerServiceImpl - insertCustomer");
		
		System.out.println(dto);
		
		dao.save(dto);
	}

//	// 로그인
//	@Override
//	public int loginCustomer(CustomerDTO dto) throws ServletException, IOException {
//		System.out.println("CustomerServiceImpl - loginCustomer");
//		System.out.println(" login dto " + dto.toString());
//		
//		int selectCnt = dao.loginCustomer(dto.getEmail(), dto.getPassword());
//		System.out.println(" selectCnt " + selectCnt);
//		
//		return selectCnt;
//	}
//	
//	// 아이디 찾기 
//    @Override
//    public String findID(String name, String hp) throws ServletException, IOException {
//        System.out.println("CustomerServiceImpl - findID");
//        
//        String foundEmail = dao.findID(name, hp);
//        
//        return foundEmail;
//    }
}
