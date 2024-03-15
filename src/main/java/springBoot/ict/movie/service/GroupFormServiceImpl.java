//package springBoot.ict.movie.service;
//
//import java.io.IOException;
//import java.util.List;
//
//import javax.servlet.ServletException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import springBoot.ict.movie.dao.GroupFormRepositiry;
//import springBoot.ict.movie.dto.CustomerDTO;
//import springBoot.ict.movie.dto.GroupFormAnswerDTO;
//import springBoot.ict.movie.dto.GroupFormDTO;
//
//@Service
//public class GroupFormServiceImpl implements GroupFormService {
//
//	@Autowired
//	private GroupFormRepositiry dao;
//	
//	//게시판목록
//	@Override
//	public List<GroupFormDTO> GroupFormList() 
//			throws ServletException, IOException {
//		System.out.println("서비스 - GroupFormList");
//		
//		List<GroupFormDTO> list = dao.GroupFormList();
//		System.out.println("list:"+list);
//		return list;
//	}
//
//	//게시판등록
//	@Override
//	public int insertGroupForm(GroupFormDTO dto) 
//			throws ServletException, IOException {
//		System.out.println("서비스 - insertGroupForm");
//		
//		int insertCnt = dao.insertGroupForm(dto);
//		
//		return insertCnt;
//	}
//
//	// 등록 1건 찾기
//		@Override
//		public GroupFormDTO selectGroupForm(GroupFormDTO dto) 
//		        throws ServletException, IOException {
//			System.out.println("서비스 - selectGroupForm");
//			
//		    GroupFormDTO selectedGroupForm = dao.selectGroupForm(dto);
//		    
//		    return selectedGroupForm;
//		}
//
//	// 답변 등록
//	@Override
//	public int insertGroupFormAnswer(GroupFormAnswerDTO dto) 
//	        throws ServletException, IOException {
//	    System.out.println("서비스 - insertGroupFormAnswer");
//	    
//	    int insertCnt = dao.insertGroupFormAnswer(dto);
//	    
//	    return insertCnt;
//	}
//
//	//답변 1건 찾기
//	@Override
//	public CustomerDTO selectGroupFormAnswer(GroupFormDTO dto)
//			throws ServletException, IOException {
//		System.out.println("서비스 - selectGroupFormAnswer");
//		
//		CustomerDTO selectGroupFormAnswer = dao.selectGroupFormAnswer(dto);
//		
//		return selectGroupFormAnswer;
//	}
//
//	
//	//게시판수정
//	@Override
//	public int updateGroupForm(GroupFormDTO dto) 
//			throws ServletException, IOException {
//		System.out.println("서비스 - updateGroupForm");
//		
//		int updateCnt = dao.updateGroupForm(dto);
//		
//		return updateCnt;
//	}
//
//	//게시판삭제
//	@Override
//	public int deleteGroupForm(int group_num) 
//			throws ServletException, IOException {
//		System.out.println("서비스 - deleteGroupForm");
//		
//		int deleteCnt = dao.deleteGroupForm(group_num);
//		
//		return deleteCnt;
//	}
//
//	//게시판상세
//	@Override
//	public GroupFormDTO findById(int group_num) 
//			throws ServletException, IOException {
//		System.out.println("서비스 - findById");
//		
//		GroupFormDTO dto = dao.findById(group_num);
//		
//		return dto;
//	}
//
//}
