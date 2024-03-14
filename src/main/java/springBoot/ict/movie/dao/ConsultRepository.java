package springBoot.ict.movie.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;

public interface ConsultRepository extends JpaRepository<ConsultDTO, Integer> {
	
	// 1:1 목록 및 답변 1건 찾아오기
	@Query("SELECT c FROM ConsultAnswerDTO c WHERE c.one_id = :one_id")
	ConsultAnswerDTO ConsultAnswer(int one_id);
	
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
