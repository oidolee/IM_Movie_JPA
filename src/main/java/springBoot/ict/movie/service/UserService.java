package springBoot.ict.movie.service;

import java.io.IOException;
import java.nio.CharBuffer;  // 주의
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import springBoot.ict.movie.dto.CredentialsDTO;
import springBoot.ict.movie.dto.SignUpDTO;
import springBoot.ict.movie.dto.UserDTO;
import springBoot.ict.movie.entities.User;
import springBoot.ict.movie.exception.AppException;
import springBoot.ict.movie.mapper.UserMapper;
import springBoot.ict.movie.repository.UserRepository;

@RequiredArgsConstructor
@Service
public class UserService {
	
	private final UserRepository userRepository;	
	private final UserMapper userMapper;
	private final PasswordEncoder passwordEncoder;
	
	public UserDTO findById(String id) {
		System.out.println("<<< UserService - findById() >>>");
		
		User user = userRepository.findByUserId(id)
				.orElseThrow(() -> new AppException("UnKnown user", HttpStatus.NOT_FOUND));
		
		return userMapper.toUserDTO(user);		
	}
	
	public User login(CredentialsDTO credentialsDTO) {
		System.out.println("<<< UserService -  login() >>>");
		System.out.println("userID :" + credentialsDTO.getId());
		
		
		
		User user = userRepository.findByUserId(credentialsDTO.getId())
				.orElseThrow(() -> new AppException("UnKnown user", HttpStatus.NOT_FOUND));
		System.out.println("userID :" + credentialsDTO.getId());
		// 비밀번호 인코더를 사용하여 비밀번호가 일반 텍스트로 저장되는 것을 방지하지만 해시된 비밀번호는 읽을 수 없다.
		// import java.nio.CharBuffer;  // 주의
		if(passwordEncoder.matches(CharBuffer.wrap(credentialsDTO.getPassword()), user.getPassword())) {
			return user;		
		}
		
		throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
	}
	
	public User register(SignUpDTO userDTO) {
		
		System.out.println("<<< UserService - register() >>>");
		System.out.println("Id : " + userDTO.getId());
		System.out.println("Password : " + userDTO.getPassword());
		System.out.println("Name : " + userDTO.getName());
		System.out.println("hp : " + userDTO.getHp());
		System.out.println("Birthday : " + userDTO.getBirthday());
		System.out.println("Address : " + userDTO.getAddress());
		System.out.println("No : + " + userDTO.getNo());
		System.out.println("Regdate : + " + userDTO.getRegdate());
		System.out.println("Show : + " + userDTO.getState());
		System.out.println("Token : " + userDTO.getToken());   // 추가
		
		// Optional : java.util
		Optional<User> optionalUser = userRepository.findByUserId(userDTO.getId());
		
		if(optionalUser.isPresent()) {
			throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
		}
		
		User user = new User();
		user.setId(userDTO.getId());  
		user.setName(userDTO.getName());
		user.setHp(userDTO.getHp());
		user.setBirthday(userDTO.getBirthday());
		user.setAddress(userDTO.getAddress());
		user.setNo(userDTO.getNo());
		user.setRegdate(userDTO.getRegdate());
		user.setState(userDTO.getState());
		user.setToken(userDTO.getToken());   // 추가, 컬럼 size 500
		user.setRole("ROLE_USER");
		user.setType(userDTO.getType());
		
		// passwordEncoder를 사용하여 암호를 일반텍스트로 저장하지 않고 해시한다.
		user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDTO.getPassword())));
		
		User saveUser = userRepository.save(user);
		
		return saveUser;
	}
	
	public List<User> listCustomer()
			throws ServletException, IOException {
		System.out.println("서비스 - listCustomer");
		
		return userRepository.findAll();
	}
	
	
	public int idCheck(String id) {
		System.out.println("서비스 - idCheck");
		
		return userRepository.countById(id);
		
	}
	
	//아이디찾기
	public String findIdByNameAndHp(String name, String hp) {
	    return userRepository.findIdByNameAndHp(name, hp);
	}
	
	
	
	// 회원정보 조회
	public Optional<User> searchCustomer(String id) {
		
		return userRepository.findByUserId(id);
	}
	
	
	// 회원정보 수정
	public User updateCustomer (User dto)
			throws ServletException, IOException{
		User user = new User();
		user.setId(dto.getId());  
		user.setName(dto.getName());
		user.setHp(dto.getHp());
		user.setBirthday(dto.getBirthday());
		user.setAddress(dto.getAddress());
		user.setNo(dto.getNo());
		user.setRegdate(dto.getRegdate());
		user.setState(dto.getState());
		user.setToken(dto.getToken());   // 추가, 컬럼 size 500
		user.setRole(dto.getRole());
		user.setType(dto.getType());
		user.setPassword(passwordEncoder.encode(CharBuffer.wrap(dto.getPassword())));
		
		
		return userRepository.save(user);
	}

	// 비밀번호 변경을 위해 조회 
	public User findByUserIdAndHp(String id, String hp) {
		Optional<User> userOptional = userRepository.findByIdAndHp(id, hp);
		return userOptional.orElse(null); // Optional에서 User 객체를 추출하고, 없을 경우에는 null 반환
	}

	// 비밀번호 변경 
	public boolean resetPassword(String id, String hp, String newPassword) {
	    Optional<User> optionalUser = userRepository.findByIdAndHp(id, hp);
	    System.out.println(optionalUser);
	    
	    if (optionalUser.isPresent()) {
	        User user = optionalUser.get();
	        // 사용자가 존재하면 비밀번호를 업데이트합니다.
	        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(newPassword)));
	        userRepository.save(user);
	        return true; // 비밀번호 업데이트 성공
	    } else {
	        return false; // 사용자가 존재하지 않음
	    }
	}
		
}






