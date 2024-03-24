package springBoot.ict.movie.mapper;

import org.apache.ibatis.annotations.Mapper;

import springBoot.ict.movie.dto.SignUpDTO;
import springBoot.ict.movie.dto.UserDTO;
import springBoot.ict.movie.entities.User;


@Mapper
public interface UserMapper {
	
	UserDTO toUserDTO(User user);
	
	User signUpToUser(SignUpDTO userDTO);
	
}
