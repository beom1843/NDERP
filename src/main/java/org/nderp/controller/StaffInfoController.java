package org.nderp.controller;


import java.util.List;

import org.nderp.domain.CodeDAO;
import org.nderp.domain.Staff;
import org.nderp.service.StaffInfoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RequestMapping("/*")
@RestController
@Log4j
@AllArgsConstructor
public class StaffInfoController {

	private StaffInfoService service;

	@GetMapping(value = "/codeDept",
			produces={
					MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<CodeDAO>> getDept(){
		log.info("-------------Controller_GetDept------------");
		
		return new ResponseEntity<List<CodeDAO>>(service.getDept(),HttpStatus.OK);
	}
	
	@GetMapping(value = "/codeSchool",
			produces={
					MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<CodeDAO>> getSchool(){
		log.info("-------------Controller_GetSchool------------");
		
		return new ResponseEntity<List<CodeDAO>>(service.getSchool(),HttpStatus.OK);
	}
	
	@GetMapping(value = "/codeSkill",
			produces={
					MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<CodeDAO>> getSkill(){
		log.info("-------------Controller_GetSkill------------");
		
		return new ResponseEntity<List<CodeDAO>>(service.getSkill(),HttpStatus.OK);
	}
	
	@PostMapping(value="/new",
			consumes = "application/json",
			produces = { MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> addStaff(@RequestBody Staff staff){
		log.info("------------Controller_addStaff----------------");
	
		log.info("Staff"+staff);
		

		int insertCount = service.insertStaff(staff);
		log.info("------------Controller_end----------------");	
		
		return insertCount==1
				? new ResponseEntity<>("success", HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping(value = "/get/{staff_no}",
			produces={
					MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<Staff> getStaff(@PathVariable("staff_no") int staff_no){
		log.info("-------------Controller_GetSkill------------");
		
		return new ResponseEntity<Staff>(service.readStaff(staff_no),HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/delete/{staff_no}",
			produces = { MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> delete(@PathVariable("staff_no")int staff_no){
		
		log.info("remove:" +staff_no);
		
		
		return service.deleteStaff(staff_no)==1
				? new ResponseEntity<>("success",HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(method={RequestMethod.PUT, RequestMethod.PATCH},
			value="/update",
			consumes="application/json",
			produces={MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> modify(@RequestBody Staff staff){
		
		return service.updateStaff(staff) ==1
				? new ResponseEntity<>("success",HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
	

}
