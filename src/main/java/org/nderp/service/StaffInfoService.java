package org.nderp.service;

import java.util.List;

import org.nderp.domain.CodeDAO;
import org.nderp.domain.Staff;

public interface StaffInfoService {

	public List<CodeDAO> getDept();
	public List<CodeDAO> getSchool();
	public List<CodeDAO> getSkill();
	
//	public List<CodeDAO> getCode();
	
	public int insertStaff(Staff staff);
	public int deleteStaff(int staffNo);
	public int updateStaff(Staff staff);
	public Staff readStaff(int staffNo);
}
