package springBoot.ict.movie.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import springBoot.ict.movie.config.UserAuthProvider;
import springBoot.ict.movie.entities.CustomOAuth2User;


@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler  extends SimpleUrlAuthenticationSuccessHandler {

	private final UserAuthProvider jwtProvider;
	
//	@Value("${redirect.url.development}") // 활성 프로파일에 따른 URL 주입
//    private String redirectUrl;
	
	@Override
	public void onAuthenticationSuccess (
		HttpServletRequest request, 
		HttpServletResponse response,
		Authentication authentication
	) throws IOException, ServletException {
		
		CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
		
		String userId = oAuth2User.getName();
		String token = jwtProvider.createToken(userId);
		System.out.println(" onAuthenticationSuccess token 시작 : " + token );
		
		
		
        //response.sendRedirect(redirectUrl + "/auth/oauth-response/" + token + "/3600");
        response.sendRedirect("http://localhost:3000/auth/oauth-response/" + token + "/3600");
        // response.sendRedirect("http://3.39.155.236:3000/auth/oauth-response/" + token + "/3600");
	}
}
