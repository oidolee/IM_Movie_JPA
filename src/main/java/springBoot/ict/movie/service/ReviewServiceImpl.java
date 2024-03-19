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



	public List<ReviewDTO> reviewList() {
	System.out.println("ReviewServiceImpl - reviewList");
		
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}



}
