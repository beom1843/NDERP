package org.nderp.mapper;

import org.nderp.domain.Staff;

public interface StaffMapper {
	
	public int insert(Staff staff);
	public int delete(int staff_no);
	public int update(Staff staff);
}
