package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.GroupFormRepositiry;
import springBoot.ict.movie.dto.GroupFormDTO;

@Service
public class GroupFormServiceImpl implements GroupFormService {
	
	@Autowired
	private GroupFormRepositiry dao;

	//고객등록
	@Override
	public GroupFormDTO GroupInsert(GroupFormDTO dto) 
			throws ServletException, IOException {
		System.out.println("서비스 - GroupInsert");
		
		return dao.save(dto);
	}

	//관리자목록
	@Override
	public List<GroupFormDTO> GroupList() 
			throws ServletException, IOException {
		System.out.println("서비스 - GroupList");
		System.out.println(dao.findAll());
		
		return dao.findAll();
	}

	

}
