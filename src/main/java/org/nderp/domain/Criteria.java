package org.nderp.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Criteria {

	private int pageNum;
	private int amount;
	
	private String type;
	
	private String keyword;
	private String sex;
	private int dept;
	private String edu;
	private String skill;
	
	//Y일 때 기술스택을 검색함
	private String isSkill;
	
	//A일 때 추가기술을 AND조건으로 검색함
	private String isAdd;
	//and 조건일 경우 추가기술 코드를 받아옴
	private String add;
	
	private String year1;
	private String month1;
	private String day1;
	
	private String year2;
	private String month2;
	private String day2;
	
	private String condition;
	private String method;
	
	public Criteria(){
		this(1,5);
		this.isSkill="P";
	}
	
	public Criteria(int pageNum, int amount){
		this.pageNum = pageNum;
		this.amount = amount;
	}
	
	public String[] getTypeArr(){
		System.out.println(".................................");
		System.out.println("getTypeArr....................");
		return type == null? new String[] {}: type.split("");
	}
	public String[] getEduArr(){
		return edu == null? new String[] {}: edu.split("");
	}
	public String[] getSkillArr(){
		return skill == null? new String[] {}: skill.split("");
	}
	
	public String[] getIsSkillArr(){
		return isSkill == null? new String[] {}: isSkill.split("");
	}
	
	public String[] getSexArr(){
		return sex == null? new String[] {}: sex.split("");
	}
	
	public String[] getIsAddArr(){
		return isAdd == null? new String[] {}: isAdd.split("");
	}
	public String[] getAddArr(){
		return add ==null? new String[] {} : add.split("");
	}
	

}
