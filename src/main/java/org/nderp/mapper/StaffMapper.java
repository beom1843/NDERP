package org.nderp.mapper;

import java.util.HashMap;
import java.util.List;

import org.nderp.domain.Criteria;
import org.nderp.domain.ResultDAO;
import org.nderp.domain.Staff;

public interface StaffMapper {
	
	public int insert(Staff staff);
	public int delete(int staff_no);
	public int update(Staff staff);
	public Staff get(int staff_no);
	public List<ResultDAO> getListWithPaging(Criteria cri);
	
	
	public int insertSkill(int skill_code);
	public int deleteSkill(int staff_no);
	public int updateSkill(HashMap<String,Integer> staff_skill);
	public int[] getSkill(int staff_no);
}
