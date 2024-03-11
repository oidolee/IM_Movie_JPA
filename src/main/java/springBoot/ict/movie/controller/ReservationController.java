package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/page_1")
public class ReservationController {

	private static final Logger logger = LoggerFactory.getLogger(ReservationController.class);
		
	// 영화 리스트 조회
    @PostMapping("/save")
    public Map<String, Object> customerInsert()
            throws ServletException, IOException {
        logger.info("url - ");
        
        System.out.println("url - ");
      
        

        return null;
    }


}

