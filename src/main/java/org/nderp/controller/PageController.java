package org.nderp.controller;


import org.nderp.domain.Criteria;
import org.nderp.dto.PageDTO;
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
	

	@GetMapping("/staff_input_form")
	public void input(){
	
	}
	
	@GetMapping("/staff_search_form")
	public void search(Criteria cri, Model model){
		model.addAttribute("pageMaker",new PageDTO(cri,123));
	}
	
	@GetMapping("/staff_updel_form")
	public void updel(int staff_no, Model model){
		model.addAttribute("staff_no",staff_no);
	}
}
