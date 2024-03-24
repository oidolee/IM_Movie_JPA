package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.NoticeRepository;
import springBoot.ict.movie.dto.NoticeDTO;

@Service
public class NoticeServiceImpl implements NoticeService{
	
	@Autowired
	private NoticeRepository dao;

	// 공지목록
	@Override
	public List<NoticeDTO> NoticeList() 
			throws ServletException, IOException {
		System.out.println("서비스 - NoticeList");
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	// 공지 등록 
	@Override
	public NoticeDTO NoticeInsert(NoticeDTO dto) 
			throws ServletException, IOException {
		System.out.println("서비스 - NoticeInsert");
		
		return dao.save(dto);
	}

	//공지 상세페이지
	@Override
	public NoticeDTO getNoticeDetail(int notice_num) 
			throws ServletException, IOException {
		System.out.println("서비스 - getNoticeDetail");
		
		NoticeDTO dto = dao.findById(notice_num).orElse(null);
		
		System.out.println(notice_num);	
		System.out.println(dto);
		
		return dto;
	}

	// 공지 수정
	@Override
	public void NoticeUpdate(NoticeDTO dto) 
			throws ServletException, IOException {
		System.out.println("서비스 - NoticeUpdate");
		System.out.println(dto);
		
		dao.save(dto);
	}

	
	// 공지 삭제
	@Override
	public void NoticeDelete(int notice_num) 
			throws ServletException, IOException {
		System.out.println("서비스 - NoticeDelete");
		System.out.println(notice_num);
		
		dao.deleteById(notice_num);
		
	}

}
