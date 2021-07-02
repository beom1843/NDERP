package org.nderp.domain;

import lombok.Data;

@Data
public class CodeDAO {

	//DeptCode일 경우 0, SchoolCode일 경우 1, SkillCode일 경우 2)
	private int codeDiv;
	
	private int skill_code;
	private String skill_name;
	
	private int department_code;
	private String department_name;
	
	private int school_code;
	private String school_name;
}
