package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.CouponCusRepository;
import springBoot.ict.movie.dao.CouponRepository;
import springBoot.ict.movie.dto.CouponCusDTO;
import springBoot.ict.movie.dto.CouponDTO;

@Service
public class CouponServiceImpl implements CouponService {

	@Autowired
	private CouponRepository cpdao;
	
	@Autowired
	private CouponCusRepository cpcusdao; 
	
	// 쿠폰 등록 
	@Override
	public CouponDTO insertCoupon(CouponDTO cpdto) 
			throws ServletException, IOException {

		return cpdao.save(cpdto);
	}

	// 고객 쿠폰 등록 
	@Override
	public CouponCusDTO insertCusCoupon(CouponCusDTO cpcusdto) 
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		return cpcusdao.save(cpcusdto);
	}

	// 쿠폰 리스트
	@Override
	public List<CouponDTO> couponList() 
			throws ServletException, IOException {

		return cpdao.findAll();
	}

	// 고객 쿠폰 리스트
	@Override
	public List<CouponCusDTO> cusCouponList(String c_email) 
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		return cpcusdao.findAll();
	}

	// 쿠폰 상세내역(관리자)
	@Override
	public Optional<CouponDTO> selectCoupon(String ic_name) 
			throws ServletException, IOException {
		
		Optional<CouponDTO> cpdto = cpdao.selectCouponDetail(ic_name);
		
		return cpdto;
	}
	
	// 고객 쿠폰 상세내역
	@Override
	public Optional<CouponCusDTO> selectCusCoupon(String ic_name) 
			throws ServletException, IOException {
		Optional<CouponCusDTO> cpcusdto = cpcusdao.selectCusCouponDetail(ic_name);
		return cpcusdto;
	}
	
	
	
}
