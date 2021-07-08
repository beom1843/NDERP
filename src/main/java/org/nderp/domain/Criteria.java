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
	
	public Criteria(){
		this(1,5);
	}
	
	public Criteria(int pageNum, int amount){
		this.pageNum = pageNum;
		this.amount = amount;
	}
	

}