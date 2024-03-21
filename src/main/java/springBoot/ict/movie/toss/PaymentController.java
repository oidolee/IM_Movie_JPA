package springBoot.ict.movie.toss;
//package springBoot.ict.movie.controller;
//
//import java.io.IOException;
//import java.util.List;
//
//import javax.servlet.ServletException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import springBoot.ict.movie.configuration.TossPaymentConfig;
//import springBoot.ict.movie.dto.PaymentDTO;
//import springBoot.ict.movie.dto.PaymentResDto;
//import springBoot.ict.movie.service.PaymentServiceImpl;
//
//@CrossOrigin(origins="**", maxAge=3600)
//@RestController
//@Validated
//@RequestMapping(value="/api/v1/payments")
//public class PaymentController {
//
//    private final PaymentServiceImpl paymentService;
//    private final TossPaymentConfig tossPaymentConfig;
//
//    @Autowired
//    public PaymentController(PaymentServiceImpl paymentService, TossPaymentConfig tossPaymentConfig) {
//        this.paymentService = paymentService;
//        this.tossPaymentConfig = tossPaymentConfig;
//    }
//
//    @PostMapping("/toss")
//    public ResponseEntity requestTossPayment(@AuthenticationPrincipal User principal, @RequestBody @Valid PaymentDTO paymentReqDto) {
//        PaymentResDto paymentResDto = paymentService.requestTossPayment(paymentReqDto.toEntity(), principal.getUsername()).toPaymentResDto();
//        paymentResDto.setSuccessUrl(paymentReqDto.getYourSuccessUrl() == null ? tossPaymentConfig.getSuccessUrl() : paymentReqDto.getYourSuccessUrl());
//        paymentResDto.setFailUrl(paymentReqDto.getYourFailUrl() == null ? tossPaymentConfig.getFailUrl() : paymentReqDto.getYourFailUrl());
//        return ResponseEntity.ok().body(new SingleResponse<>(paymentResDto));
//    }
//}
