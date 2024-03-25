package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.GroupFormAnswerDTO;
import springBoot.ict.movie.dto.GroupFormDTO;




public interface GroupFormService {

	//고객등록
	public GroupFormDTO GroupInsert(GroupFormDTO dto)
			throws ServletException, IOException;
	
	//관리자목록
	public List<GroupFormDTO> GroupList()
			throws ServletException, IOException;
	
	//고객목록
	   public List<GroupFormDTO> GroupCusList(String c_email) 
	         throws ServletException, IOException;
	   
	// 관리자 상세
		public Optional<GroupFormDTO> selectGroup(int group_id)
				throws ServletException, IOException;
		
		// 관리자 답변 등록
		public GroupFormAnswerDTO insertGroupAnswer(GroupFormAnswerDTO dto)
				throws ServletException, IOException;
		
		 // 관리자 답변 고객 리스트
		 public List<GroupFormAnswerDTO> selectGroupAnswer(int group_id) 
				 throws ServletException, IOException;
				
		//관리자 답변후 상태 업데이트
		 public void updateCusGroupstate(int one_id) 
				 throws ServletException, IOException;
	
	
		
}
