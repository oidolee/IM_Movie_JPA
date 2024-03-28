package springBoot.ict.movie.controller;

import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.request.SingleMessageSendingRequest;
import net.nurigo.sdk.message.response.SingleMessageSentResponse;
import net.nurigo.sdk.message.service.DefaultMessageService;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

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
        System.out.println("Reservation_Payment_Store : ");
        System.out.println(dto);
        // 선물 정보를 문자 메시지로 발송합니다.
        Message message = new Message();
        message.setFrom("01063395120"); // 발신번호
        message.setTo(dto.getGift_recipient()); // 수신번호
        
        // 유효 기간을 발급 후 1년으로 설정합니다.
        LocalDate currentDate = LocalDate.now();
        LocalDate expirationDate = currentDate.plusYears(1);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");
        String formattedExpirationDate = expirationDate.format(formatter);
        
        String messageContent = "[ IM_MOVIE 기프티콘 발급 안내 ]" + "\n" + dto.getGift_name() + " 님이 " + "기프티콘을 선물하셨습니다!\n"
        		+ "\n▶ 보내시는 분: " + dto.getGift_name()
                + "\n▶ 보내시는 분의 메시지: " + dto.getGift_content()
                + "\n▶ 상품명: " + dto.getItem_name() 
                + "\n▶ 쿠폰 번호: " + dto.getIc_code() 
                + "\n▶ 수량: " + dto.getGift_count() 
                + "\n▶ 유효 기간: " + formattedExpirationDate
                + "\n\n" 
                + "자세한 사용내역은 IM MOVIE 홈페이지 참조부탁드리며, \nIM과 함께 즐거운 영화 시간 보내시길 바랍니다.\n감사합니다.";

        message.setText(messageContent);


        System.out.println(dto.getGift_name());
        System.out.println(dto.getGift_recipient());
        System.out.println("[ IM_MOVIE 기프티콘 발급 안내 ]" + "\n" + dto.getGift_name() + " 님이 " + "기프티콘을 선물하셨습니다!\n"
        		+ "\n▶ 보내시는 분: " + dto.getGift_name()
        		+ "\n▶ 보내시는 분의 메시지: " + dto.getGift_content()
        		+ "\n▶ 상품명: " + dto.getItem_name() 
        		+ "\n▶ 쿠폰 번호: " + dto.getGift_num()
        		+ "\n▶ 유효 기간: 2024.10.01" + "\n\n" 
        		+ "자세한 사용내역은 IM MOVIE 홈페이지 참조부탁드리며, IM과 함께 즐거운 영화 시간 보내시길 바랍니다.\n감사합니다.");
        
        return this.messageService.sendOne(new SingleMessageSendingRequest(message));
        //return null;
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
