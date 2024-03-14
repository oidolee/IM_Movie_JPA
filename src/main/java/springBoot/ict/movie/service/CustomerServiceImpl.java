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
		System.out.println("CustomerServiceImpl - findAll");
		
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

	// 로그인
	@Override
	public CustomerDTO loginCustomer(CustomerDTO dto) 
			throws ServletException, IOException {
		System.out.println("CustomerServiceImpl - loginCustomer");
		System.out.println(" login dto " + dto.toString());
		
		String email = dto.getIC_email();
		String password = dto.getIC_password();
		
		
		
		return dao.loginService(email, password);
	}
	
	// 아이디 찾기 
    @Override
    public String findID(String name, String hp) throws ServletException, IOException {
        System.out.println("CustomerServiceImpl - findID");
        
        String foundEmail = dao.findIdByNameAndHp(name, hp);
        System.out.println("name : " + name + " hp : " + hp);
        System.out.println("foundEmail :" + foundEmail);
        
        return foundEmail;
    }

    // 비밀번호 찾기
	@Override
	public String findPWD(String email, String hp) throws ServletException, IOException {
		System.out.println("CustomerServiceImpl - findPWD");
        
        String findPWD = dao.findIdByEmailAndHp(email, hp);
        System.out.println("email : " + email + " hp : " + hp);
        System.out.println("foundEmail :" + findPWD);
        
        return findPWD;
	}
}
