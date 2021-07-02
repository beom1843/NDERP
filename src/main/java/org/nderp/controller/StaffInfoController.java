package org.nderp.controller;


import java.util.List;

import org.nderp.domain.CodeDAO;
import org.nderp.service.StaffInfoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RequestMapping("/*")
@RestController
@Log4j
@AllArgsConstructor
public class StaffInfoController {

	private StaffInfoService service;

//	@GetMapping(value = "/code",
//			produces={
//					MediaType.APPLICATION_XML_VALUE,
//					MediaType.APPLICATION_JSON_UTF8_VALUE})
//	public ResponseEntity<List<CodeDAO>> getCode(){
//		log.info("-------------Controller_GetCode------------");
//		return new ResponseEntity<List<CodeDAO>>(service.getCode(),HttpStatus.OK);
//	}
	
	@GetMapping(value = "/codeDept",
			produces={
					MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<CodeDAO>> getDept(){
		log.info("-------------Controller_GetDept------------");
		return new ResponseEntity<List<CodeDAO>>(service.getDept(),HttpStatus.OK);
	}
	
	@GetMapping(value = "/codeSkill",
			produces={
					MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<CodeDAO>> getSkill(){
		log.info("-------------Controller_GetSkill------------");
		return new ResponseEntity<List<CodeDAO>>(service.getSkill(),HttpStatus.OK);
	}
	
	@GetMapping(value = "/codeSchool",
			produces={
					MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<CodeDAO>> getSchool(){
		log.info("-------------Controller_GetSchool------------");
		return new ResponseEntity<List<CodeDAO>>(service.getSchool(),HttpStatus.OK);
	}
	


}
