package springBoot.ict.movie.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.CouponDTO;

public interface CouponRepository extends JpaRepository<CouponDTO, Integer> {
	
	// 
	
	// 쿠폰 상세 내역
	@Query("SELECT cp FROM CouponDTO cp WHERE cp.ic_num = :ic_num")
	Optional<CouponDTO> selectCouponDetail(int ic_num);
	
	// 쿠폰 삭제
	@Modifying
	@Query("DELETE FROM CouponDTO cp WHERE cp.ic_name = :ic_name")
	int deleteCoupon(String ic_name);
	
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
