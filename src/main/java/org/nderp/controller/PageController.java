package org.nderp.controller;


import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/views/*", 
produces=MediaType.TEXT_HTML_VALUE)
public class PageController {

	@GetMapping("/staff_input_form")
	public void input(Model model){
	}
	
	@GetMapping("/staff_search_form")
	public void search(Model model){
	}
	
	@GetMapping("/staff_updel_form")
	public void updel(int staff_no, Model model){
		model.addAttribute("staff_no",staff_no);
	}
	
}
