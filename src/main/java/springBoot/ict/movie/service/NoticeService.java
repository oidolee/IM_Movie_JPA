package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.NoticeDTO;

public interface NoticeService {


	// 공지목록
	public List<NoticeDTO> NoticeList()
		throws ServletException, IOException;
		
		
	// 공지 등록 
	public NoticeDTO NoticeInsert(NoticeDTO dto)
			throws ServletException, IOException;
	
	//공지 상세페이지
	NoticeDTO getNoticeDetail(int notice_num)
				throws ServletException, IOException;	
	 
	// 공지 수정
		public void NoticeUpdate(NoticeDTO dto)
				throws ServletException, IOException;
		
	// 공지 삭제
	public void NoticeDelete(int notice_num)
			throws ServletException, IOException;

}
