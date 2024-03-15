//package springBoot.ict.movie.service;
//
//import java.io.IOException;
//import java.util.List;
//
//import javax.servlet.ServletException;
//import springBoot.ict.movie.dto.CustomerDTO;
//import springBoot.ict.movie.dto.GroupFormAnswerDTO;
//import springBoot.ict.movie.dto.GroupFormDTO;
//
//
//
//public interface GroupFormService {
//
//	//게시판목록
//	public List<GroupFormDTO> GroupFormList()
//		throws ServletException, IOException;
//	
//	//게시판등록
//	public int insertGroupForm(GroupFormDTO dto)
//			throws ServletException, IOException;
//	
//	// 등록 1건 찾기
//	public GroupFormDTO selectGroupForm(GroupFormDTO dto)
//			throws ServletException, IOException;
//	
//	//답변 등록
//	public int insertGroupFormAnswer(GroupFormAnswerDTO dto)
//			throws ServletException, IOException;
//	
//	//답변 1건 찾기
//	public CustomerDTO selectGroupFormAnswer(GroupFormDTO dto)
//			throws ServletException, IOException;
//	
//		
//	
//	//게시판수정
//	public int updateGroupForm(GroupFormDTO dto)
//			throws ServletException, IOException;
//	
//	//게시판삭제
//	public int deleteGroupForm(int id)
//			throws ServletException, IOException;
//	
//	//게시판상세
//	public GroupFormDTO findById(int id)
//			throws ServletException, IOException;
//	
//		
//}
