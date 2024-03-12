package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
	@PostMapping("/list")	// ★페이지 이름 아니고, 어떤걸 쓰는거지???
	public List<StoreDTO> customerList(Model model)
            throws ServletException, IOException {
        logger.info("<<< url -> customerList");
        List<StoreDTO> list = service.listStore();
        model.addAttribute("list", list); //★list 설정 필요함!
        System.out.println(list);
        
        return list;
    } 
	
	
	
}
