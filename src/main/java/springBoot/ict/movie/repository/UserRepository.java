package springBoot.ict.movie.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.entities.User;


public interface UserRepository extends JpaRepository<User, Integer> { 
	//Optional<User> findByLogin(String login);
	
	@Query("SELECT u FROM User u WHERE u.id = :id")
    Optional<User> findByUserId(@Param("id") String id);
	
	@Query("SELECT COUNT(u) FROM User u WHERE u.id = :id")
	int countById(@Param("id") String id);
	
	// 아이디찾기
	@Query("SELECT u.id FROM User u WHERE u.name = :name AND u.hp = :hp")
    String findIdByNameAndHp(@Param("name") String name, @Param("hp") String hp);
	
	// 아이디와 휴대폰 번호로 사용자 조회
    @Query("SELECT u FROM User u WHERE u.id = :id AND u.hp = :hp")
    Optional<User> findByIdAndHp(@Param("id") String id, @Param("hp") String hp);
	
	
}
