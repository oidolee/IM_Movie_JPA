package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.StoreGiftRepository;
import springBoot.ict.movie.dto.StoreGiftDTO;

@Service
public class StoreGiftServiceImpl implements StoreGiftService {

	@Autowired
	private StoreGiftRepository dao;
	
	// 스토어 목록
	@Override
	public List<StoreGiftDTO> listStoreGift() throws ServletException, IOException {
		System.out.println("서비스 - listStoreGift");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 스토어 등록
	@Override
	public void insertStoreGift(StoreGiftDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - insertStoreGift");
		
		
//        // 문자열로 사용할 문자들
//        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//
//        // 랜덤 객체 생성
//        Random random = new Random();
//
//        // 랜덤한 문자열을 저장할 StringBuilder 생성
//        StringBuilder stringBuilder = new StringBuilder();
//
//        // 10자의 랜덤 문자열 생성
//        for (int i = 0; i < 10; i++) {
//            // 문자열에서 랜덤하게 문자 선택
//            char randomChar = characters.charAt(random.nextInt(characters.length()));
//            // 선택된 문자를 StringBuilder에 추가
//            stringBuilder.append(randomChar);
//        }
//        
//        // 랜덤 문자열을 DTO의 gift_num에 할당
//        dto.setGift_num(stringBuilder.toString());
        
		System.out.println(dto);
		
		dao.save(dto);
	}

	// 스토어 수정
	@Override
	public void updateStoreGift(StoreGiftDTO dto) throws ServletException, IOException {
		System.out.println("서비스 - updateStoreGift");
		
    
	    // 저장 또는 업데이트합니다.
	    dao.save(dto);
	}

	// 스토어 삭제
	@Override
	public void deleteStoreGift(int gift_num) throws ServletException, IOException {
		System.out.println("서비스 - deleteStoreGift");
		
		dao.deleteById(gift_num);
	}

	// 스토어 상세페이지
	@Override
	public StoreGiftDTO findById(int gift_num) throws ServletException, IOException {
		System.out.println("서비스 - findById");
		
		return dao.findById(gift_num).get();
	}

}
