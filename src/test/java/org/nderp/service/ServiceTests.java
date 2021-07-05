package org.nderp.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.nderp.domain.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
@Log4j
@WebAppConfiguration
public class ServiceTests {

	@Setter(onMethod_={@Autowired})
	private StaffInfoService service;
	
//	@Test
//	public void testService(){
//		log.info(service.getDept());
//	}
	
//	@Test
//	public void testDelete(){
//		log.info(service.deleteStaff(10));
//	}
	
	@Test
	public void testInsert(){
		
		Staff staff = new Staff();
		staff.setDepartment_code(1);
		staff.setGraduate_day("2015-07-18");
		staff.setJumin_no("970118-13");
		staff.setSchool_code(3);
		int[] SL = {1,2,3};
		staff.setSkill_list(SL);
		staff.setStaff_name("유라1d짱1");
		log.info(staff);
		
		service.insertStaff(staff);
		
	}
	
}
