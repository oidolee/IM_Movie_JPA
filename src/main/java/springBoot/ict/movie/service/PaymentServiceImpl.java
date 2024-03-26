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
	
	@Override
	public void PaymentInsert(PaymentDTO dto) 
		throws ServletException, IOException {
		
		System.out.println("PaymentServiceImpl - PaymentInsert");
		
		System.out.println(dto);
		
		dao.save(dto);
	}
	
	@Override
	public List<PaymentDTO> PaymentList(String ic_email) 
		throws ServletException, IOException {
		
		System.out.println("PaymentServiceImpl - PaymentList");
		
		List<PaymentDTO> list = dao.PaymentList(ic_email);
		System.out.println("list : " + list);
		return list;
	}

}
