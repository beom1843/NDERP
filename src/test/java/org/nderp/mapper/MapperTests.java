package org.nderp.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.nderp.domain.Staff;
//import org.nderp.mapper.TimeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
@Log4j
public class MapperTests {

	@Setter(onMethod_=@Autowired)
//	private TimeMapper timeMapper;
//	private CodeMapper mapper;
	private StaffMapper staffMapper;
	
//	@Test
//	public void testGetTime(){
//		log.info(timeMapper.getClass().getName());
//		log.info(timeMapper.getTime());
//	}
	
//	@Test
//	public void testGetDept(){
//		log.info(mapper.getDept());
//	}
	
//	@Test
//	public void testInsert(){
//		Staff staff = new Staff();
//		staff.setDepartment_code(1);
//		staff.setGraduate_day("2012-07-15");
//		staff.setJumin_no("921015-2000000");
//		staff.setStaff_name("조길동");
//		staff.setSchool_code(2);
//		
//		log.info(staffMapper.insert(staff));
//	}

//	@Test
//	public void testDelete(){
//		int staff_no = 1;
//		
//		log.info(staffMapper.delete(staff_no));
//	}
	
	
//	@Test
//	public void testUpdate(){
//		Staff staff = new Staff();
//		staff.setDepartment_code(2);
//		staff.setGraduate_day("2012-02-26");
//		staff.setJumin_no("921015-2000000");
//		staff.setStaff_name("조길동");
//		staff.setSchool_code(2);
//		
//		log.info(staffMapper.update(staff));
//	}
	
}
