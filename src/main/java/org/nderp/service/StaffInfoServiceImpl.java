package org.nderp.service;

import java.util.HashMap;
import java.util.List;

import org.nderp.domain.CodeDAO;
import org.nderp.domain.Criteria;
import org.nderp.domain.ResultDAO;
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
		int[] skillList = staff.getSkill_list();
		int re = staffMapper.insert(staff);
		
		log.info(skillList);
		for(int skill_code:skillList){
			log.info(skill_code);
			staffMapper.insertSkill(skill_code);
		}
		
		return re;
	}

	@Override
	public int deleteStaff(int staffNo) {
		int re = staffMapper.deleteSkill(staffNo);
		re += staffMapper.delete(staffNo);
		return re;
	}

	@Override
	public int updateStaff(Staff staff) {

		int[] skillList = staff.getSkill_list();
		
		int staff_no = staff.getStaff_no();
		
		staffMapper.deleteSkill(staff_no);
		log.info(staff_no);
		log.info(skillList);
		for(int skill_code:skillList){
			HashMap<String,Integer> staff_skill = new HashMap<String,Integer>();
			staff_skill.put("skill_code", skill_code);
			staff_skill.put("staff_no", staff_no);
			staffMapper.updateSkill(staff_skill);
		}
		
		int re = staffMapper.update(staff);
		return re;
	}

	@Override
	public Staff readStaff(int staffNo) {
		Staff staff = staffMapper.get(staffNo);
		staff.setSkill_list(staffMapper.getSkill(staffNo));
		
		return staff;
	}

	@Override
	public List<ResultDAO> listStaff(Criteria cri) {
	log.info("Service-_Search............................");
		if (cri.getSex()=="M"){
			cri.setSex("13");
		}else if(cri.getSex()=="F"){
			cri.setSex("24");
		}else if(cri.getSex()=="MF"){
			cri.setSex("1234");
		}
		return staffMapper.getListWithPaging(cri);
	}

	@Override
	public int getTotal(Criteria cri) {

		return staffMapper.getTotal(cri);
	}
	
	

}
