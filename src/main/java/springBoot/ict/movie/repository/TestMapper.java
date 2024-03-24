package springBoot.ict.movie.repository;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import springBoot.ict.movie.dto.ParkingDTO;

@Mapper
public interface TestMapper {
	ParkingDTO selectById(int ip_no);
}
