package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.PaymentDTO;

public interface PaymentRepository extends JpaRepository<PaymentDTO, Integer> {

    
}
