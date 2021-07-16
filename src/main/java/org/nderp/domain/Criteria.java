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
	
	//이름 N, 성별 J, 부서 D, 학력 S, 졸업일 G, 기술 K, 추가 기술 A and 조건으로 검색 
	private String type;
	
	private String keyword;
	private String sex;
	private int dept;
	private String edu;
	private String skill;
	
	
	//Y일 때 추가기술 or 조건으로 검색
	private String isAdd;
	//추가기술을 받아옴
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
	
	public String[] getSexArr(){
		return sex == null? new String[] {}: sex.split("");
	}
	
	

}
