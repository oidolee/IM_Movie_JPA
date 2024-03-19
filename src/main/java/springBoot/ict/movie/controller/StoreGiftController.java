package springBoot.ict.movie.controller;

import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;

import java.io.IOException;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import springBoot.ict.movie.dto.StoreGiftDTO;
import springBoot.ict.movie.service.StoreGiftService;

@RestController
public class StoreGiftController {

    @Autowired
    private StoreGiftService service;

    private final DefaultMessageService messageService;

    public StoreGiftController() {
        // 반드시 계정 내 등록된 유효한 API 키, API Secret Key를 입력해주셔야 합니다!
        this.messageService = NurigoApp.INSTANCE.initialize("NCSQXJSURZ58SQNB", "VP543DROHSBAWEFB489JZXJTMPAL7MDW", "https://api.coolsms.co.kr");
    }

    @PostMapping("/page_3/EditStoreGift_Admin/send-gift-message")
    //@PostMapping("/page_3/EditStoreGift_Admin/send-gift-message")
    public SingleMessageSentResponse sendGiftMessage(@RequestBody StoreGiftDTO dto) throws ServletException, IOException {
        // 선물 정보를 저장합니다.
        //service.insertStoreGift(dto);

        // 선물 정보를 문자 메시지로 발송합니다.
        Message message = new Message();
//        message.setFrom(dto.getGift_recipient()); // 발신번호
//        message.setTo(dto.getGift_name()); // 수신번호
//        message.setText(dto.getGift_content()); // 메시지 내용

        message.setFrom("01063395120"); // 발신번호
        message.setTo("01063395120"); // 수신번호
        message.setText("test입니다."); // 메시지 내용
        
        return this.messageService.sendOne(new SingleMessageSendingRequest(message));
    }
}
