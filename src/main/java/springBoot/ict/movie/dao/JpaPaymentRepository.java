package springBoot.ict.movie.dao;

import org.springframework.data.domain.Pageable;
import java.util.Optional;

import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;

import springBoot.ict.movie.dto.Payment;

public interface JpaPaymentRepository extends JpaRepository<Payment, Long> {
   
    Optional<Payment> findByOrderId(String orderId);
    
    Optional<Payment> findByPaymentKeyAndCustomer_Email(String paymentKey, String email);
    
    Slice<Payment> findAllByCustomer_Email(String email, Pageable pageable);
}
