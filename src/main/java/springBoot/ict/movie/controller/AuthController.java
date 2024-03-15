package springBoot.ict.movie.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/kakao")
    public ResponseEntity<?> loginWithKakao(@RequestBody Map<String, String> request) {
        String accessToken = request.get("accessToken");
        // 카카오 액세스 토큰을 받아 백엔드에서 로그인 처리
        authService.loginWithKakao(accessToken);
        // 로그인 처리 후 응답
        return ResponseEntity.ok().build();
    }
}
