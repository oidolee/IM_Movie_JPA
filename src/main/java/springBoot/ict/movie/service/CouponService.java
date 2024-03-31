package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.CouponCusDTO;
import springBoot.ict.movie.dto.CouponDTO;

public interface CouponService {
	
	// 쿠폰 등록 
	public CouponDTO insertCoupon(CouponDTO cpdto)
			throws ServletException, IOException;
	
	// 쿠폰 수정
	public CouponDTO updateCoupon(CouponDTO cpdto)
			throws ServletException, IOException;
	
	// 쿠폰 삭제
	public void deleteCoupon(int ic_num)
			throws ServletException, IOException;

	// 고객 쿠폰 등록 
	public CouponCusDTO insertCusCoupon(CouponCusDTO cpcusdto)
			throws ServletException, IOException;
	
	// 고객쿠폰 삭제
	public int deleteCusCoupon(int ic_num)
			throws ServletException, IOException;
	
	// 쿠폰 리스트
	public List<CouponDTO> couponList()
			throws ServletException, IOException;
	
	// 고객 쿠폰 리스트
	public List<CouponCusDTO> cusCouponList(String c_email)
			throws ServletException, IOException;
	
	// 고객 쿠폰 갯수
	public int countCusCoupon(String c_email)
			throws ServletException, IOException;

	// 쿠폰 상세내역
	public Optional<CouponDTO> selectCoupon(int ic_num)
			throws ServletException, IOException;
	
	// 고객 쿠폰 상세내역
	public Optional<CouponCusDTO> cusCouponDetail(int ic_num) 
			throws ServletException, IOException;
			
	
//	// 회원정보 1건 select
//	public CustomerDTO selectCustomer(String email) 
//			throws ServletException, IOException;
}
