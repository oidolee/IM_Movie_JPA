package springBoot.ict.movie.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; // 경로주의 .web.
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import lombok.RequiredArgsConstructor;
import springBoot.ict.movie.handler.OAuth2SuccessHandler;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;
	private final UserAuthProvider userAuthProvider;
	private final DefaultOAuth2UserService oAuth2UserService;
	private final OAuth2SuccessHandler oAuth2SuccessHandler;
	
	@Bean
	public  SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		
		System.out.println("<<<  SecurityConfig -  securityFilterChain() >>>");
		
		http
			.exceptionHandling().authenticationEntryPoint(userAuthenticationEntryPoint)
			.and()
			.addFilterBefore(new JwtAuthFilter(userAuthProvider), BasicAuthenticationFilter.class)  // Spring Security의 인증필터앞에 JWT 필터를 추가
			.csrf().disable()     // 복잡성을 피하기 위해 csrf를 비활성화한다.
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // stateless 애플리케이션을 스프링에게 전달하면 스프링에서 세션과 쿠키를 생성하지 않는다.
			.and()
			.authorizeHttpRequests((requests) -> requests
					.antMatchers(HttpMethod.POST, "/login", "/register", "/sign-up", "/index/save", "/admin/**", "/page_5/**", "/page_3/**", "/**", "oauth2/**", "/page_6/**").permitAll()   // 인증이 필요하지 않은 유일한 엔드포인트이며, 리액트의 url과 일치시켜야 한다.
					.antMatchers(HttpMethod.GET, "/admin/**", "/page_5/**", "/page_3/**","/**", "oauth2/**", "/page_1/**").permitAll()
					.antMatchers(HttpMethod.PUT, "/page_2/**", "/page_3/**","/updateCustomer", "/page_5/**", "/page_6/**", "/page_1/**", "/changePWD").permitAll()
					.antMatchers(HttpMethod.DELETE, "/page_3/**", "/page_5/**", "/page_6/**").permitAll()
					
//					// 사용자 역할이 필요한 엔드포인트
//				    .antMatchers(HttpMethod.GET, "/user-info").hasAnyRole("USER", "ADMIN")
//				    .antMatchers(HttpMethod.POST, "/user-post").hasAnyRole("USER", "ADMIN")
//				    
//				    // 관리자 역할이 필요한 엔드포인트
//				    .antMatchers(HttpMethod.GET, "/admin-info").hasRole("ADMIN")
//				    .antMatchers(HttpMethod.POST, "/admin-post").hasRole("ADMIN")
				    
					.anyRequest().authenticated()   // 나머지 엔드포인트는 인증을 받아야 함
			
			)
			.oauth2Login(oauth2 -> oauth2
					.authorizationEndpoint(endpoint -> endpoint.baseUri("/api/v1/auth/oauth2"))
					.redirectionEndpoint(endpoint -> endpoint.baseUri("/oauth2/callback/*"))
					.userInfoEndpoint(endpoint -> endpoint.userService(oAuth2UserService))
					.successHandler(oAuth2SuccessHandler)
			);
		
		
		return http.build();
		
	}
	

}
