package org.nderp.controller;


import org.nderp.service.StaffInfoService;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@AllArgsConstructor
@Log4j
@Controller
@RequestMapping(value="/*", 
produces=MediaType.TEXT_HTML_VALUE)
public class PageController {
	
	private StaffInfoService service;

	@GetMapping("/staff_input_form")
	public void input(Model model){
		model.addAttribute("codeDept",service.getDept());
		model.addAttribute("codeSchool",service.getSchool());
		model.addAttribute("codeSkill",service.getSkill());
	}
	
	@GetMapping("/staff_search_form")
	public void search(Model model){
		model.addAttribute("codeDept",service.getDept());
		model.addAttribute("codeSchool",service.getSchool());
		model.addAttribute("codeSkill",service.getSkill());
	}
	
	@GetMapping("/staff_updel_form")
	public void updel(int staff_no, Model model){
		model.addAttribute("codeDept",service.getDept());
		model.addAttribute("codeSchool",service.getSchool());
		model.addAttribute("codeSkill",service.getSkill());
		model.addAttribute("staff_no",staff_no);
	}
	
}
