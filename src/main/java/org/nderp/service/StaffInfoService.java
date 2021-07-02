package org.nderp.service;

import java.util.List;

import org.nderp.domain.CodeDAO;

public interface StaffInfoService {

	public List<CodeDAO> getDept();
	public List<CodeDAO> getSchool();
	public List<CodeDAO> getSkill();
	
//	public List<CodeDAO> getCode();
}
