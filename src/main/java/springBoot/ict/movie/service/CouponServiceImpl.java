package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	
	// 쿠폰 수정
	@Override
	public CouponDTO updateCoupon(CouponDTO cpdto)
			throws ServletException, IOException{
		
		return cpdao.save(cpdto);
	}
	
	// 쿠폰 삭제
	@Override
	public void deleteCoupon(int ic_num)
			throws ServletException, IOException{
		
		cpdao.deleteById(ic_num);
	}

	// 고객 쿠폰 등록 
	@Override
	public CouponCusDTO insertCusCoupon(CouponCusDTO cpcusdto) 
			throws ServletException, IOException {


		return cpcusdao.save(cpcusdto);
	}
	
	// 고객 쿠폰 삭제
	@Override
	public int deleteCusCoupon(int ic_num)
			throws ServletException, IOException{
		
		return cpcusdao.deleteCusCoupon(ic_num);
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
		
		return cpcusdao.selectCusCoupon(c_email);
	}
	
	// 고객 쿠폰 갯수
	public int countCusCoupon(String c_email)
			throws ServletException, IOException{
		
		return cpcusdao.countCusCoupon(c_email);
	}

	// 쿠폰 상세내역(관리자)
	@Override
	public Optional<CouponDTO> selectCoupon(int ic_num) 
		throws ServletException, IOException {
		
		Optional<CouponDTO> cpdto = cpdao.selectCouponDetail(ic_num);
		return cpdto;
	}
	
	// 고객 쿠폰 상세내역
	@Override
	public Optional<CouponCusDTO> cusCouponDetail(int ic_num) 
			throws ServletException, IOException {
		Optional<CouponCusDTO> cpcusdto = cpcusdao.selectCusCouponDetail(ic_num);
		return cpcusdto;
	}
	
	
	
}
