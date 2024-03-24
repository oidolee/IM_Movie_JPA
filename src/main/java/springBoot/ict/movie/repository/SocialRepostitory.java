package springBoot.ict.movie.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.entities.Social;
import springBoot.ict.movie.entities.User;

public interface SocialRepostitory extends JpaRepository<Social, Integer> { 
	//Optional<User> findByLogin(String login);
	
	@Query("SELECT u FROM User u WHERE u.id = :id")
    Optional<User> findByUserId(@Param("id") String id);
	
	@Query("SELECT COUNT(u) FROM User u WHERE u.id = :id")
	int countById(@Param("id") String id);
	
	// 아이디찾기
	@Query("SELECT u.id FROM User u WHERE u.name = :name AND u.hp = :hp")
    String findIdByNameAndHp(@Param("name") String name, @Param("hp") String hp);
	
	// 비밀번호 재설정 
	@Query("SELECT u.password FROM User u WHERE u.id = :id AND u.hp = :hp")
	 String findByIdAndHp(String id, String hp);


	
}