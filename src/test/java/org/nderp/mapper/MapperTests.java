package org.nderp.mapper;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.nderp.domain.Criteria;
import org.nderp.domain.ResultDAO;
import org.nderp.domain.Staff;
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
	
//	@Test
//	public void testGet(){
//		int staff_no = 22;
//		
//		int[] skillArr = staffMapper.getSkill(staff_no);
//		
//	}
	
//	@Test
//	public void testPaging(){
//		Criteria cri = new Criteria();
//		//5개씩 3페이지
//		cri.setPageNum(3);
//		cri.setAmount(5);
//		List<ResultDAO> list = staffMapper.getListWithPaging(cri);
//		list.forEach(staff -> log.info(staff));
//	}
	
//	@Test
//	public void testSearchingPaging(){
//		Criteria cri = new Criteria();
//		cri.setPageNum(1);
//		cri.setAmount(5);
//		cri.setType("KN");
////	cri.setType("N");
//	cri.setKeyword("서");
////	cri.setType("K");
//	cri.setSkill("123");
//		List<ResultDAO> list = staffMapper.getListWithPaging(cri);
////		
//		list.forEach(b -> log.info(b));
//	}
	
	@Test
	public void testSearchTotal(){
		Criteria cri = new Criteria();
		cri.setIsSkill("N");
//		cri.setType("NJ");
		cri.setType("N");
		cri.setKeyword("조");
//		cri.setSex("1");
		cri.setSkill("5");
		log.info(cri.getIsSkill());
		log.info(staffMapper.getTotal(cri));
	}
}
