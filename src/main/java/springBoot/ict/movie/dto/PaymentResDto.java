package springBoot.ict.movie.dto;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResDto {

	private String payType; // 결제 타입
	private Long amount; // 가격 정보
	private String orderName; // 주문명
	private String orderId; // 주문id
	private String customerEmail; // 고객 이메일
	private String customerName; // 고객 이름
	private String successUrl; 
	private String failUrl;
	
	private String failReason; // 실패 이유
	private boolean cancelYN; // 취소여부
	private String cancelReason; // 취소 이유
	private String createdAt; // 결제 시간
}

// PaymentDTO로 받은 정보 검증 후 PaymentResDTO로 결제 요청