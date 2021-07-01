package org.nderp.service;

import java.util.List;

import org.nderp.dto.codeDTO;

public interface StaffInfoService {

	public List<codeDTO> getDept();
	public List<codeDTO> getSchool();
	public List<codeDTO> getSkill();
	
}
