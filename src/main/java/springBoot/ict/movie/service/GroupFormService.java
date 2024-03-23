package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import springBoot.ict.movie.dto.GroupFormDTO;




public interface GroupFormService {

	//고객등록
	public GroupFormDTO GroupInsert(GroupFormDTO dto)
			throws ServletException, IOException;
	
	//관리자목록
	public List<GroupFormDTO> GroupList()
			throws ServletException, IOException;
	
	
		
}
