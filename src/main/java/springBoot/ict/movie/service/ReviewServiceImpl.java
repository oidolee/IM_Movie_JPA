package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.ReviewRepository;
import springBoot.ict.movie.dto.ReviewDTO;

@Service
public class ReviewServiceImpl implements ReviewService{
	
	@Autowired
	private ReviewRepository dao;

	@Override
	public void addReview(ReviewDTO dto) 
			throws ServletException, IOException {
		System.out.println("ReviewServiceImpl - addReview");
		System.out.println(dto);		
		dao.save(dto);
	}

	public List<ReviewDTO> reviewList(String movie_id) {
	    System.out.println("ReviewServiceImpl - reviewList");
	    // 수정된 부분: movie_id에 해당하는 리뷰만을 조회하도록 쿼리를 수정
	    List<ReviewDTO> reviews = dao.findReviewsByMovieId(movie_id);
	    System.out.println(reviews);
	    return reviews;
	}

}
