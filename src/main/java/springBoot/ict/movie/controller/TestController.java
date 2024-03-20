package springBoot.ict.movie.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	@GetMapping("/helloWrold")
	public String test() {
		return "helloWrold !!";
	}
}
