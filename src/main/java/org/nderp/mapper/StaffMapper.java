package org.nderp.mapper;

import java.util.HashMap;

import org.nderp.domain.Staff;

public interface StaffMapper {
	
	public int insert(Staff staff);
	public int delete(int staff_no);
	public int update(Staff staff);
	
	public int insertSkill(int skill_code);
	public int deleteSkill(int staff_no);
	public int updateSkill(HashMap<String,Integer> staff_skill);
	
}
