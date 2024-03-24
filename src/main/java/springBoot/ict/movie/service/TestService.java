package springBoot.ict.movie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dto.ParkingDTO;
import springBoot.ict.movie.repository.TestMapper;

@Service
public class TestService {
	
	@Autowired
	TestMapper testMapper;
	
	public ParkingDTO getTestNo(int ip_no) {
		return testMapper.selectById(ip_no);
	}
}
