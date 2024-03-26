package springBoot.ict.movie.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import springBoot.ict.movie.dto.PaymentDTO;

public interface PaymentRepository extends JpaRepository<PaymentDTO, Integer> {

	
	// 회원별 결제정보 리스트
	@Query("SELECT p FROM PaymentDTO p WHERE p.IC_Email = :ic_email")
	List<PaymentDTO> PaymentList(String ic_email);
	
}
