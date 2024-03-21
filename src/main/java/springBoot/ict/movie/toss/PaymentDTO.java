package springBoot.ict.movie.toss;

import java.util.UUID;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDTO {

    @NonNull
    private PayType payType; // 결제 타입

    @NonNull
    private Long amount; // 가격 정보

    @NonNull
    private String orderName; // 주문명

    private String yourSuccessUrl; // 성공
    private String yourFailUrl; // 실패

    public Payment toEntity() {
        return Payment.builder()
                .payType(this.payType)
                .amount(this.amount)
                .orderName(this.orderName)
                .orderId(UUID.randomUUID().toString())
                .paySuccessYN(false)
                .build();
    }
}
