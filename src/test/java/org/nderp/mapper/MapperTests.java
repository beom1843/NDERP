package org.nderp.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
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

//	@Setter(onMethod_=@Autowired)
//	private TimeMapper timeMapper;

	@Setter(onMethod_=@Autowired)
	private StaffInfoMapper mapper;
	
//	@Test
//	public void testGetTime(){
//		log.info(timeMapper.getClass().getName());
//		log.info(timeMapper.getTime());
//	}
	
	@Test
	public void testGetDept(){
		log.info(mapper.getDept());
	}
	
	
}
