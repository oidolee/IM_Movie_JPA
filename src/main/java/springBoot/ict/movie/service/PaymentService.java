package springBoot.ict.movie.service;

import java.io.IOException;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.PaymentDTO;

public interface PaymentService {

	// 결제 정보 저장
	public void PaymentInsert(PaymentDTO dto)
		throws ServletException, IOException;
}
