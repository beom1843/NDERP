package org.nderp.mapper;

import java.util.List;

import org.nderp.dto.codeDTO;

public interface StaffInfoMapper {
	public List<codeDTO> getDept();
	public List<codeDTO> getSchool();
	public List<codeDTO> getSkill();
}
