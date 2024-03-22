package springBoot.ict.movie.service;

import java.io.IOException;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.PaymentRepository;
import springBoot.ict.movie.dto.PaymentDTO;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository dao;
	
	@Override
	public void PaymentInsert(PaymentDTO dto) 
		throws ServletException, IOException {
		
		System.out.println("PaymentServiceImpl - PaymentInsert");
		
		System.out.println(dto);
		
		dao.save(dto);
	}

}
