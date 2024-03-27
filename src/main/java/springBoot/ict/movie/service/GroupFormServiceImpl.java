package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springBoot.ict.movie.dao.GroupFormAnswerRepository;
import springBoot.ict.movie.dao.GroupFormRepositiry;
import springBoot.ict.movie.dto.ConsultAnswerDTO;
import springBoot.ict.movie.dto.ConsultDTO;
import springBoot.ict.movie.dto.GroupFormAnswerDTO;
import springBoot.ict.movie.dto.GroupFormDTO;

@Service
public class GroupFormServiceImpl implements GroupFormService {
	
	@Autowired
	private GroupFormRepositiry dao;
	
	@Autowired
	private GroupFormAnswerRepository dao2;

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

	//고객목록
	@Override
	public List<GroupFormDTO> GroupCusList(String c_email) 
			throws ServletException, IOException {
		System.out.println("서비스 - GroupCusList");
		List<GroupFormDTO> list = dao.GroupList(c_email);
		return list;
	}

	// 관리자 상세
	@Override
	public Optional<GroupFormDTO> selectGroup(int group_id) 
			throws ServletException, IOException {
		System.out.println("서비스 - selectGroup");
		Optional<GroupFormDTO> dto = dao.findById(group_id);
		
		return dto;
	}

	// 관리자 답변 등록
	@Override
	public GroupFormAnswerDTO insertGroupAnswer(GroupFormAnswerDTO dto)
			throws ServletException, IOException {
		System.out.println("서비스 - insertGroupAnswer");
		
		 System.out.println("dao2.save(dto) : " + dao2.save(dto));
		
		 return dao2.save(dto);
	}

	//관리자 답변후 상태 업데이트
	@Override
	 @Transactional
	public void updateCusGroupstate(int group_id) 
			throws ServletException, IOException {
		System.out.println("서비스 - updateCusGroupstate");
		dao.updateCusGroupstate(group_id);
	}

	// 관리자 답변 고객 리스트
	@Override
	public List<GroupFormAnswerDTO> selectGroupAnswer(int group_id) 
			throws ServletException, IOException {
		System.out.println("서비스 - selectGroupAnswer");
		List<GroupFormAnswerDTO> list = dao2.selectGroup(group_id);
		
		return list;
	}

	

}
