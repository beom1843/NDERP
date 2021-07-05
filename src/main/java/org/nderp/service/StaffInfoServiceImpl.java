package org.nderp.service;

import java.util.ArrayList;
//import java.util.ArrayList;
import java.util.List;

import org.nderp.domain.CodeDAO;
import org.nderp.domain.Staff;
import org.nderp.mapper.CodeMapper;
import org.nderp.mapper.StaffMapper;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@AllArgsConstructor
@Log4j
@Service
public class StaffInfoServiceImpl implements StaffInfoService {

	private CodeMapper mapper;
	private StaffMapper staffMapper;

//	@Override
//	public List<CodeDAO> getCode() {
//		List<CodeDAO> deptCode = mapper.getDept();
//		List<CodeDAO> schoolCode = mapper.getSchool();
//		List<CodeDAO> skillCode = mapper.getSkill();
//		
//		List<CodeDAO> totalCode = new ArrayList<CodeDAO>();
//		for(CodeDAO codeDao:deptCode){
//			codeDao.setCodeDiv(0);
//			totalCode.add(codeDao);
//		}
//		for(CodeDAO codeDao:schoolCode){
//			codeDao.setCodeDiv(1);
//			totalCode.add(codeDao);
//		}
//		for(CodeDAO codeDao:skillCode){
//			codeDao.setCodeDiv(2);
//			totalCode.add(codeDao);
//		}
//		
//		return totalCode;
//	}
	
	@Override
	public List<CodeDAO> getDept() {
	
		return(mapper.getDept());
	}

	@Override
	public List<CodeDAO> getSchool() {
	
		return (mapper.getSchool());
	}

	@Override
	public List<CodeDAO> getSkill() {
	
		return (mapper.getSkill());
	}

	
	@Override
	public int insertStaff(Staff staff) {
		log.info("-------------insertService-------");
		int[] skillList = staff.getSkill_list();
		log.info(skillList);
		int re = staffMapper.insert(staff);
		
		for(int skill_code:skillList){
			log.info(skill_code);
			staffMapper.insertSkill(skill_code);
		}
		
		return re;
	}

	@Override
	public int deleteStaff(int staffNo) {
	
		return (staffMapper.delete(staffNo));
	}

	@Override
	public int updateStaff(Staff staff) {

		return (staffMapper.update(staff));
	}
	
	

}
