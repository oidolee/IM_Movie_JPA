package springBoot.ict.movie.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	
	@Override
	public void onAuthenticationSuccess (
		HttpServletRequest request, 
		HttpServletResponse response,
		Authentication authentication
	) throws IOException, ServletException {
		
		CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
		
		String userId = oAuth2User.getName();
		String token = jwtProvider.createToken(userId);
		
		
		
		response.sendRedirect("http://localhost:3000/auth/oauth-response/" + token + "/3600");
		
		
	}
}
