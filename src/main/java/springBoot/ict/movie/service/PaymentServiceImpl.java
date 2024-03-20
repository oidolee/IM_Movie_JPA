package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.JpaPaymentRepository;
import springBoot.ict.movie.dto.Member;
import springBoot.ict.movie.dto.Payment;
import springBoot.ict.movie.dto.PaymentDTO;
@Service
public class PaymentServiceImpl implements PaymentService {

//	 @Autowired
//    private JpaPaymentRepository paymentRepository;
//
//    @Autowired
//    private Member memberService;
//	    
//	@Override
//	public Payment requestTossPayment(Payment payment, String userEmail) {
//		
//	 Member member = memberService.findMember(userEmail);
//        if (payment.getAmount() < 1000) {
//            throw new CustomLogicException(ExceptionCode.INVALID_PAYMENT_AMOUNT);
//        }
//        payment.setCustomer(member);
//        return paymentRepository.save(payment);
//
//	}

}
