package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.CustomerDTO;

public interface CustomerService {
	
	// 고객목록
	public List<CustomerDTO> listcustomer()
			throws ServletException, IOException;
	
	// 고객 추가 
	public void insertCustomer(CustomerDTO dto)
			throws ServletException, IOException;

//	// 로그인
//	public int loginCustomer(CustomerDTO dto)
//			throws ServletException, IOException;
//	
//	// 아이디 찾기
//	public String findID(String name, String hp)
//			throws ServletException, IOException; 
//	
}
