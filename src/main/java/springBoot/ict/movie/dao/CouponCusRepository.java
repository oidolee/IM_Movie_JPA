package springBoot.ict.movie.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.CouponCusDTO;

@Transactional
public interface CouponCusRepository extends JpaRepository<CouponCusDTO, Integer> {
	
	// 고객 쿠폰 리스트
	@Query("SELECT cpcusdto " + 
	        "FROM CouponCusDTO cpcusdto " + 
	        "WHERE cpcusdto.ic_status = 'y' and cpcusdto.c_email = :c_email " + 
	        "ORDER BY cpcusdto.ic_num DESC")
	List<CouponCusDTO> selectCusCoupon(String c_email);
	
	// 고객 쿠폰 갯수
	@Query("SELECT COUNT(*) FROM CouponCusDTO cpcusdto WHERE cpcusdto.c_email = :c_email and cpcusdto.ic_status = 'y' ")
	int countCusCoupon(String c_email);
	
	
	// 고객 쿠폰 삭제
	@Modifying
	@Query("UPDATE CouponCusDTO SET ic_status = 'n' WHERE ic_num = :ic_num")
	int deleteCusCoupon(int ic_num);
	
	// 고객 쿠폰 상세내역
	@Query("SELECT cpcus FROM CouponCusDTO cpcus WHERE cpcus.ic_num = :ic_num")
	Optional<CouponCusDTO> selectCusCouponDetail(int ic_num);
	
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
