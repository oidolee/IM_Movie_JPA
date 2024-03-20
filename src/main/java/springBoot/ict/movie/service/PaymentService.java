package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.PaymentDTO;

public interface PaymentService {

	// 목록
	public List<PaymentDTO> PaymentList()
		throws ServletException, IOException;
}
