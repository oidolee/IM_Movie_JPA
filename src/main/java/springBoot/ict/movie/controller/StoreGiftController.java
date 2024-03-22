package springBoot.ict.movie.controller;

import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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

    @PostMapping("/page_3/Reservation_Payment_Store")
    //@PostMapping("/page_3/EditStoreGift_Admin/send-gift-message")
    public SingleMessageSentResponse sendGiftMessage(@RequestBody StoreGiftDTO dto) throws ServletException, IOException {
        // 선물 정보를 저장합니다.
        service.insertStoreGift(dto);

        // 선물 정보를 문자 메시지로 발송합니다.
//        Message message = new Message();
//        message.setFrom(dto.getGift_name()); // 발신번호
//        message.setTo(dto.getGift_recipient()); // 수신번호
//        message.setText(dto.getGift_content()); // 메시지 내용

//        message.setFrom("01063395120"); // 발신번호
//        message.setTo("01063395120"); // 수신번호
//        message.setText("test입니다."); // 메시지 내용
        
        System.out.println(dto.getGift_name());
        System.out.println(dto.getGift_recipient());
       // System.out.println("제목: IM_MOVIE 선물하기 발급 안내" + "\n" + "안녕하세요." + dto.getGift_name() + "님이 선물 " + "\n" + dto.getGift_content());
        System.out.println("IM_MOVIE 기프티콘 발급 안내" + "\n" + dto.getGift_name() + "님이 " + "기프티콘을 선물하셨습니다!\n\n[기프티콘 내용]"
        		+ "\n메시지: " + dto.getGift_content()
        		+ "\n상품명: " + dto.getGift_name() + "\n쿠폰 번호: " + dto.getGift_num() + "\n유효 기간: 2024.09.01" + "\n\n" + "자세한 사용내역은 홈페이지 참조.\nIM MOVIE 드림");
        
        //System.out.println("안녕하세요 " + "님,IM 영화관에서 보내드리는 소중한 선물입니다!\n\n" + dto.getGift_recipient() + "님이 선물하셨습니다.\n\n[기프티콘 쿠폰 내용]\n쿠폰 번호: " + dto.getGift_num() + "\n유효 기간: " + expirationDate + "\n사용 조건: " + usageConditions + "\n\n선물을 받았으니 즐거운 시간을 보내시길 바랍니다. 감사합니다!\n\n IM 영화관 드림");
       // return this.messageService.sendOne(new SingleMessageSendingRequest(message));
        return null;
    }
    
    // 스토어 리스트 조회
    @GetMapping("/storeGiftList") 
    //@GetMapping("/")  
    public List<StoreGiftDTO> storeGiftList(Model model)
             throws ServletException, IOException {

         List<StoreGiftDTO> list = service.listStoreGift();
         System.out.println("list : " + list);
         model.addAttribute("list", list); //★listStore_Admin list 설정
         
         
         return list;
     } 
    
}
