package springBoot.ict.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.ParkingDTO;
import springBoot.ict.movie.service.TestService;

@RestController
public class TestController {
	
	@GetMapping("/helloWrold")
	public String test() {
		return "helloWrold !!";
	}
	
	
	@Autowired
	TestService testService;
	
	@GetMapping("/test/{ip_no}")
	public ParkingDTO getTestNo(@PathVariable int ip_no) {
		return  testService.getTestNo(ip_no);
	}
}
