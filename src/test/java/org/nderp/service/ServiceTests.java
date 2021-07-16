package org.nderp.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.nderp.domain.Criteria;
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
	
//	@Test
//	public void testupdate(){
//		
//		Staff staff = new Staff();
//		staff.setStaff_no(22);
//		staff.setDepartment_code(2);
//		staff.setGraduate_day("2016-07-18");
//		staff.setJumin_no("970118-183");
//		staff.setSchool_code(3);
//		int[] SL = {3,4,5};
//		staff.setSkill_list(SL);
//		staff.setStaff_name("조야코");
//		log.info(staff);
//		
//		service.updateStaff(staff);
//		
//	}

//	@Test
//	public void testInsert(){
//		
//		Staff staff = new Staff();
//		staff.setDepartment_code(2);
//		staff.setGraduate_day("2016-07-18");
//		staff.setJumin_no("000118-143");
//		staff.setSchool_code(3);
//		int[] SL = {1,2,3,4};
//		staff.setSkill_list(SL);
//		staff.setStaff_name("야코");
//		log.info(staff);
//		
//		service.insertStaff(staff);
//		
//	}
	
	@Test
	public void testSearch(){
		Criteria cri = new Criteria();
		//5개씩 3페이지
		cri.setPageNum(1);
		cri.setAmount(18);
		cri.setSkill("1");
		cri.setAdd("9");
		cri.setIsAdd("A");
		cri.setCondition("rownum");
		cri.setMethod("");
		log.info("서비스테스트000000000"+cri);
		log.info("서비스결과--------"+ service.listStaff(cri));
	}
	
//	@Test
//	public void testRead(){
//		int staffNo=22;
//		log.info(service.readStaff(staffNo));
//	}
	
}
