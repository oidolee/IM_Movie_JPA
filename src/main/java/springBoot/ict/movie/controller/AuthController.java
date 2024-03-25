package springBoot.ict.movie.controller;


import java.io.IOException;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import springBoot.ict.movie.config.UserAuthProvider;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.CredentialsDTO;
import springBoot.ict.movie.dto.SignUpDTO;
import springBoot.ict.movie.entities.User;
import springBoot.ict.movie.repository.UserRepository;
import springBoot.ict.movie.service.AuthService;
import springBoot.ict.movie.service.UserService;

@RequiredArgsConstructor  // 생성자에 멤버변수를 주입
@RestController
public class AuthController {
	
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AuthService authService;
    private final UserService userService;
	private final UserAuthProvider userAuthProvider;
	
	// localhost:8081 => username : user   /  password : 제공된 패스워드 => 로그인후 index 페이지로 이동 
	@GetMapping({"", "/"})
	public String index() {
		logger.info("<<< url - index >>>");
		
		return "index";
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody CredentialsDTO credentialsDTO) {
		System.out.println("<<<  AuthController - login() >>>");
		
		User user = userService.login(credentialsDTO);
		
		System.out.println("token : " + userAuthProvider.createToken(user.getId()));
		user.setToken(userAuthProvider.createToken(user.getId()));
		
		return ResponseEntity.ok(user);   //  크롬 Network - Headers : 200 OK 새로운 JWT를 반환
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody SignUpDTO signUpDTO) {
		System.out.println("<<<  AuthController - register() >>>");
		
		// 엔티티를 생성할 때 새 엔티티를 찾을수 있는 URL과 함께 201 HTTP 코드를 반환하는 것이 가장 좋다.
		User user = new User();
		
		// 토큰 =>  크롬 application > local storage에 보관됨 
		signUpDTO.setToken(userAuthProvider.createToken(user.getId()));  // 추가해야 토큰 가져옴
		user = userService.register(signUpDTO);	// 리엑트에서 넘어온 정보 + 토큰  => insert
		return ResponseEntity.created(URI.create("/users/" + user.getId()))
				.body(user);   // 크롬 Network - Headers : 201 Created 반환
		
	}

    @PostMapping("/api/auth/kakao")
    public ResponseEntity<?> loginWithKakao(@RequestBody Map<String, String> request) {
        String accessToken = request.get("accessToken");
        // 카카오 액세스 토큰을 받아 백엔드에서 로그인 처리
        authService.loginWithKakao(accessToken);
        // 로그인 처리 후 응답
        return ResponseEntity.ok().build();
    }
    
    // 고객목록
    @GetMapping("/admin/listCustomer")
    public List<User> listCustomer(HttpServletRequest req,HttpServletResponse res,Model model)
	        throws ServletException, IOException {
	    logger.info("<<< url -> MovieList");
	    List<User> list = userService.listCustomer();
	    model.addAttribute("list", list);
	    System.out.println("list : " + list);
	    
	    return list;
	}  
    
    // 아이디중복체크
    @GetMapping("/idCheck")
    public int idCheck(@RequestParam String id) {
    	logger.info("<<< url -> idCheck >>>");
    	
    	return userService.idCheck(id);
        // 여기에 이메일 중복 검사 로직을 구현합니다.
        // 중복되면 true를 반환하고, 중복되지 않으면 false를 반환합니다.
    }
    
    //아이디 찾기
    @PostMapping("/searchId")
    public ResponseEntity<?> searchId(@RequestBody Map<String, String> requestData) {
        String name = requestData.get("name");
        String hp = requestData.get("hp");
        
        String foundId = userService.findIdByNameAndHp(name, hp);
        if (foundId != null) {
            return ResponseEntity.ok().body(foundId);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
 // 비밀번호 찾기
    @PostMapping("/searchPWD")
    public Map<String, Object> searchPWD(@RequestBody Map<String, Object> requestData) {
        String id = (String) requestData.get("id");
        String hp = (String) requestData.get("hp");
        
        // id와 hp를 이용하여 사용자 정보를 조회합니다.
        User dto = userService.findByUserIdAndHp(id, hp);
        Map<String, Object> map = new HashMap<>();
        if (dto != null) {
            // 사용자 정보가 조회가 되면  id와 hp를 반환!
            map.put("id", id);
            map.put("hp", hp);
            System.out.println("id : " + id);
            System.out.println("hp : " + hp);
        }
        return map;
    }
    
    // 비밀번호 변경!
    @PutMapping("/changePWD")
    public ResponseEntity<String> changePassword(@RequestBody Map<String, String> requestData) {
        String id = requestData.get("id");
        String hp = requestData.get("hp");
        String newPassword = requestData.get("newPassword");
        System.out.println("id : " + id);
        System.out.println("hp : " + hp);
        System.out.println("newPassword : " + newPassword);

        boolean success = userService.resetPassword(id, hp, newPassword);

        if (success) {
            return ResponseEntity.ok("Password updated successfully.");
        } else {
            return ResponseEntity.badRequest().body("Failed to update password.");
        }
    }
    
    // 회원정보 찾기
    @GetMapping("/searchCustomer/{id}")
    public Map<String, Object> serachCustomer(@PathVariable(name="id") String id, Model model) 
    		throws ServletException, IOException{
    	Optional<User> dto = null;
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
        	
        	dto = userService.searchCustomer(id);
            resultCode = "200";
            resultMsg = "searchCustomer Success";
        } catch(Exception e) {
            resultCode = "400";
            resultMsg = e.getMessage();
            e.printStackTrace();
        }
        map.put("resultCode", resultCode);
        map.put("resultMsg", resultMsg);
        map.put("dto", dto);
        
        return map; 
    }
    
    // 회원정보 수정
    @PutMapping("/updateCustomer")
    public Map<String, Object> updateCustomer(@RequestBody User dto, Model model)
    		throws ServletException, IOException{
    	logger.info("<<< url -> updateCustomer");
        String resultCode = "";
        String resultMsg = "";

        Map<String, Object> map = new HashMap<String, Object>();

        try {
        	
        	userService.updateCustomer(dto);
            resultCode = "200";
            resultMsg = "searchCustomer Success";
        } catch(Exception e) {
            resultCode = "400";
            resultMsg = e.getMessage();
            e.printStackTrace();
        }
        map.put("resultCode", resultCode);
        map.put("resultMsg", resultMsg);
        map.put("dto", dto);
        
        return map; 
    	
    }
    
}
