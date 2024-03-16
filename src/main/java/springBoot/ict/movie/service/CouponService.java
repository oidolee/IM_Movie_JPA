package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.CouponCusDTO;
import springBoot.ict.movie.dto.CouponDTO;
import springBoot.ict.movie.dto.CustomerDTO;

public interface CouponService {
	
	// 쿠폰 등록 
	public CouponDTO insertCoupon(CouponDTO cpdto)
			throws ServletException, IOException;

	// 고객 쿠폰 등록 
	public CouponCusDTO insertCusCoupon(CouponCusDTO cpcusdto)
			throws ServletException, IOException;
		
	// 쿠폰 리스트
	public List<CouponDTO> couponList()
			throws ServletException, IOException;
	
	// 고객 쿠폰 리스트
	public List<CouponCusDTO> cusCouponList(String c_email)
			throws ServletException, IOException;

	// 쿠폰 상세내역
	public Optional<CouponDTO> selectCoupon(String ic_name)
			throws ServletException, IOException;
	
	// 고객 쿠폰 상세내역
	public Optional<CouponCusDTO> selectCusCoupon(String ic_name) 
			throws ServletException, IOException;
			
	
//	// 회원정보 1건 select
//	public CustomerDTO selectCustomer(String email) 
//			throws ServletException, IOException;
}
