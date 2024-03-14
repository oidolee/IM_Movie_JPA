//package springBoot.ict.movie.dao;
//
//import java.util.List;
//
//import springBoot.ict.movie.dto.CustomerDTO;
//import springBoot.ict.movie.dto.GroupFormAnswerDTO;
//import springBoot.ict.movie.dto.GroupFormDTO;
//
//
//
//public interface GroupFormRepositiry {
//
//		//게시판목록
//		public List<GroupFormDTO> GroupFormList();
//		
//		//게시판등록
//		public int insertGroupForm(GroupFormDTO dto);
//		
//		// 등록 1건 찾기
//		public GroupFormDTO selectGroupForm(GroupFormDTO dto);
//		
//		//답변 등록
//		public int insertGroupFormAnswer(GroupFormAnswerDTO dto);
//		
//		//답변 1건 찾기
//		public CustomerDTO selectGroupFormAnswer(GroupFormDTO dto);
//		
//		//게시판수정
//		public int updateGroupForm(GroupFormDTO dto);
//		
//		//게시판삭제
//		public int deleteGroupForm(int group_num);
//		
//		//게시판상세
//		public GroupFormDTO findById(int group_num);
//}
