package springBoot.ict.movie.service;

import java.util.Map;
import java.util.Optional;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import springBoot.ict.movie.entities.CustomOAuth2User;
import springBoot.ict.movie.entities.Social;
import springBoot.ict.movie.entities.User;
import springBoot.ict.movie.repository.SocialRepostitory;
import springBoot.ict.movie.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class Oauth2UserServiceImpl extends DefaultOAuth2UserService {
	
	private final UserRepository userRespository;
	private final SocialRepostitory socialRepostitory;
	
	@Override
	public OAuth2User loadUser(OAuth2UserRequest request) throws OAuth2AuthenticationException {
		
		OAuth2User oAuth2User = super.loadUser(request);
		String oauthClientName = request.getClientRegistration().getClientName();
		
		try {
			
			System.out.println(new ObjectMapper().writeValueAsString(oAuth2User.getAttributes()));
			
		} catch (Exception exception) {
			exception.printStackTrace();
		}
		
		User userEntity = null;
		String userId = null;
		String email = null;
		String name = null;
		Social socialEntity = null;
		
		
		
//		네이버
//		{
//			"resultcode":"00",
//			"message":"success",
//			"response":{
//				"id":"ZyscV2igSHOA7EX5vhgsjtRPSgRQP-VuycMsPQ6OeqQ",
//				"email":"wwrr40@naver.com",
//				"mobile":"010-2657-5800",
//				"mobile_e164":"+821026575800",
//				"name":"정호진"
//			}
//		}
//
//		카카오
//		{
//			"id":3378423710,
//
//
//
//			"connected_at":"2024-03-07T06:58:39Z",
//			"properties":{"nickname":"정호진"},
//			"kakao_account":{
//					"profile_nickname_needs_agreement":false,
//					"profile":{
//							"nickname":"정호진",
//							"is_default_nickname":false},
//							"has_email":true,
//							"email_needs_agreement":false,
//							"is_email_valid":true,
//							"is_email_verified":true,
//							"email":"wwrr400@gmail.com"
//			}
//		}
		
		
		if (oauthClientName.equals("kakao")) {
		    userId = "kakao_" + oAuth2User.getAttributes().get("id");
		    // Kakao 계정에서 이메일 주소 추출
		    Map<String, Object> kakaoAccount = (Map<String, Object>) oAuth2User.getAttributes().get("kakao_account");
		    
		    email = (String) kakaoAccount.get("email");
		    
		    Map<String, Object> properties = (Map<String, Object>) oAuth2User.getAttributes().get("properties");
		    name = (String) properties.get("nickname");
		    
		    userEntity = new User(userId, email, name, "kakao");
		}
		
		if (oauthClientName.equals("naver")) {
			Map<String, String> responseMap = (Map<String, String>) oAuth2User.getAttributes().get("response");
			userId = "naver_" + responseMap.get("id").substring(0, 14);
			email = responseMap.get("email");
			name = responseMap.get("name");
			userEntity = new User(userId, email, name, "naver");
		}
		
		// 이미 존재하는 사용자인지 확인
		
		long existingUserCount = userRespository.countById(userId);
		
		System.out.println("userId : " + userId);
		System.out.println("existingUserCount : " + existingUserCount);
		if (existingUserCount > 0) {
			if (!userId.startsWith("kakao_") && !userId.startsWith("naver_") ) {
				throw new RuntimeException("중복된 아이디, 웹 회원 입니다.");
				
			}
		    return new CustomOAuth2User(userId);
		} else {
		    userEntity = new User(userId, email, name, oauthClientName);
		    userRespository.save(userEntity);
		    
		    socialEntity = new Social(userId, email, name, oauthClientName);
		    socialRepostitory.save(socialEntity);
		    
		    return new CustomOAuth2User(userId);
		}
	    
	    
	    
		
		//userRespository.save(userEntity);
		
		//return new CustomOAuth2User(userId);
	}

}
