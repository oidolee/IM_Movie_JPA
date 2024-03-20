package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.PaymentRepository;
import springBoot.ict.movie.dto.PaymentDTO;
@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository dao;
	
	// 목록
	@Override
	public List<PaymentDTO> PaymentList() 
		throws ServletException, IOException {
		
		System.out.println("DiscountServiceImpl - PaymentList");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

}
