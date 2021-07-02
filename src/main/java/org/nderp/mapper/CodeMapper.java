package org.nderp.mapper;

import java.util.List;

import org.nderp.domain.CodeDAO;

public interface CodeMapper {
	public List<CodeDAO> getDept();
	public List<CodeDAO> getSchool();
	public List<CodeDAO> getSkill();
}
