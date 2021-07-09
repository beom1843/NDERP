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
	private String isSkill;
	private String gDate;
	
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
	
	public String[] getIsSkillArr(){
		return isSkill == null? new String[] {}: isSkill.split("");
	}
}
