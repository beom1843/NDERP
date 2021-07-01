package org.nderp.service;

import java.util.List;

import org.nderp.dto.codeDTO;
import org.nderp.mapper.CodeMapper;

public class StaffInfoServiceImpl implements StaffInfoService {

	private CodeMapper mapper;
	
	@Override
	public List<codeDTO> getDept() {
	
		return(mapper.getDept());
	}

	@Override
	public List<codeDTO> getSchool() {
	
		return (mapper.getSchool());
	}

	@Override
	public List<codeDTO> getSkill() {
	
		return (mapper.getSkill());
	}
	
	

}
