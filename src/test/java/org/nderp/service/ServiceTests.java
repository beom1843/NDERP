package org.nderp.service;

import org.junit.Test;
import org.junit.runner.RunWith;
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
//		log.info(service.getCode());
//	}
	
	@Test
	public void testDelete(){
		log.info(service.deleteStaff(2));
	}
	
}
