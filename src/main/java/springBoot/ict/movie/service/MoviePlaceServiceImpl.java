package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.MoviePlaceRepository;
import springBoot.ict.movie.dto.MoviePlaceDTO;
import springBoot.ict.movie.dto.StoreMapDTO;

@Service
public class MoviePlaceServiceImpl implements MoviePlaceService {

    @Autowired
    private MoviePlaceRepository dao;

//    @Autowired
//    private MoviePlaceMapper jpa_dao; // MoviePlaceMapper 주입

    // 상영시간표목록
    @Override
    public List<MoviePlaceDTO> listTime(int place_num) 
            throws ServletException, IOException {
        System.out.println("서비스 - listTime place_num: " + place_num);
        
        return dao.findAllByPlaceNum(place_num);
    }

//    public List<MoviePlaceDTO> getlistTime(MoviePlaceDTO dto) 
//            throws ServletException, IOException{
//        System.out.println("서비스 -getlistTime dto:");
//        System.out.println(dto);
//        List<MoviePlaceDTO> list = jpa_dao.selectAll(dto); // jpa_dao 초기화 후 사용
//        return list;
//    }

}
