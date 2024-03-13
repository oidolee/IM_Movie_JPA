package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.StoreDTO;
import springBoot.ict.movie.service.StoreServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_3")	
public class StoreController {
	
	@Autowired
	private StoreServiceImpl service;	
	
	private static final Logger logger = LoggerFactory.getLogger(StoreController.class);
	
	// 스토어 리스트 조회
	@GetMapping	// ★페이지 이름 아니고, 어떤걸 쓰는거지???
	public List<StoreDTO> storeList(Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> storeList");
        List<StoreDTO> list = service.listStore();
        System.out.println("list : " + list);
        model.addAttribute("list", list); //★listStore_Admin list 설정
        
        
        return list;
    } 
	
	// 스토어 등록
	
	
	
	
	// 스토어 수정
	
	// 스토어 삭제
	
	// 스토어 상세페이지
}
