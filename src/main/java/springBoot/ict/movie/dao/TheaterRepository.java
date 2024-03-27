package springBoot.ict.movie.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import springBoot.ict.movie.dto.TheaterDTO;

@Transactional
public interface TheaterRepository extends JpaRepository<TheaterDTO, Integer> {

	// 고객 영화관 정보
	@Query("SELECT t from TheaterDTO t where t.c_email = :c_email")
	Optional<TheaterDTO> selectTheater(String c_email);

	// 1st 영화관 수정
	@Modifying
	@Query("UPDATE TheaterDTO SET ic_my_theater_first = :ic_my_theater_first WHERE c_email = :c_email")
	int updateFirstTheater(String c_email);

	// 2st 영화관 수정
	@Modifying
	@Query("UPDATE TheaterDTO SET ic_my_theater_second = :ic_my_theater_second WHERE c_email = :c_email")
	int updateSecondTheater(String c_email);

	// 3st 영화관 수정
	@Modifying
	@Query("UPDATE TheaterDTO SET ic_my_theater_third = :ic_my_theater_third WHERE c_email = :c_email")
	int updateThirdTheater(String c_email);


	// 고객 이메일로 고객 정보 찾아오기
//	@Query("SELECT c FROM CustomerDTO c WHERE c.email = :email")
//	CustomerDTO selectCustomerById(String email);
//	
//	// 로그인
//	@Query("SELECT c FROM CustomerDTO c WHERE c.IC_email = :email AND c.IC_password = :password")
//	 CustomerDTO loginService(String email, String password);
//
//	
//	// 아이디 찾기(이름, 핸드폰 번호)
//	@Query("SELECT c.IC_email FROM CustomerDTO c WHERE c.IC_name = :name AND c.IC_hp = :hp")
//	String findIdByNameAndHp(@Param("name") String name, @Param("hp") String hp);
//	
//	// 비밀번호 찾기 (이메일 , 핸드폰번호)
//	@Query("SELECT c.IC_password FROM CustomerDTO c WHERE c.IC_email = :email AND c.IC_hp = :hp")
//	String findIdByEmailAndHp(@Param("email") String email, @Param("hp") String hp);
//	
}
