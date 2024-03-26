package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.PaymentDTO;

public interface PaymentService {

	// 결제 정보 저장
	public void PaymentInsert(PaymentDTO dto)
		throws ServletException, IOException;
	
	// 회원별 결제 리스트
	public List<PaymentDTO> PaymentList(String ic_email) 
		throws ServletException, IOException;
}
