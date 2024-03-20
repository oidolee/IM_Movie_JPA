package springBoot.ict.movie.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;

public interface ConsultRepository extends JpaRepository<ConsultDTO, Integer> {
	
	// 아이디별 1:1 목록 및 답변 1건 찾아오기
	@Query("SELECT c FROM ConsultDTO c WHERE c.c_email = :c_email")
	List<ConsultDTO> ConsultList(String c_email);
	
	// 1:1 답변 등록 후 상태업데이트
	@Modifying
    @Query("UPDATE ConsultDTO c SET c.ib_show = 'n' WHERE c.one_id = :one_id")
    int updateConsultState(@Param("one_id") int one_id);
	
//	INSERT INTO DR_ticket_reservation (ticket_no, ticket_seat, cust_Id, game_date, purchase_date, ticket_price)
//	VALUES((SELECT NVL(MAX(ticket_no) + 1, TO_NUMBER(TO_CHAR(SYSDATE, 'YYMMDD') || '001')) FROM DR_ticket_reservation), '다크건디석', 'hong123', '2024-02-09 18:00:00', sysdate, 57000); 
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
