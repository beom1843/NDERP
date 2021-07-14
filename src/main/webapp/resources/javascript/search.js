$(document).ready(function(){
	
console.log(window.location.href);

var condition =""
		


var m1 = 0;
var m2 = 0;
var m3 = 0;
var m4 = 0;
var m5 = 0;
var m =0;
var c="";
var counts = [m1, m2, m3, m4, m5]
var sortCondition ;

window.sortCount=function(element){
	console.log($(element).val());
	//element++
	var value = $(element).val();


	function check(x){
		for(var i = 0 ; i<5 ; i++){
			if(!i==x&&!(counts[i]==0)){
				counts[i]=0
			}
		}
	}

	if(value =="rownum"){
		check(0);
		
		m=counts[0]
		m++;
		counts[0]=m
		
		c=value;
	}
	if(value =="staff_name"){
		check(1);
		
		m=counts[1]
		m++;
		counts[1]=m
		
		c=value;
	}
	if(value =="sex"){
		check(2);
		
		m=counts[2]
		m++;
		counts[2]=m
		
		c=value;
	}
	if(value =="dept"){
		check(3);
		
		m=counts[3]
		m++;
		counts[3]=m
		
		c=value;
	}
	if(value =="g_day"){
		check(4);
		
		m=counts[4]
		m++;
		counts[4]=m
		
		c=value;
	}
	console.log(m%2);
	console.log(counts)
	
	sortCondition={
		c:c,
		m:m%2
	}

	
	
}//sortCount 함수 끝
	
	function search(page){

			if(sortCondition){
				condition=c
				method=m
			}else{
				condition="staff_no desc";
				method ="";
			}
				

		
			var pagination = $(".pagination");
			var total = $(".total")
			var str1="";
			var str="";
			var result = $(".result");
			var name= $("input[name='name']").val();
			var sex= "";
			$("input[name='sex']:checked").each(function(i){
				sex += $(this).val();
			})
			if(sex=='M'){
				sex="13";
			}
			if(sex=='F'){
				sex="24";
			}
			if(sex=='MF'){
				sex="1234";
			}
			
			var school_List = "";
			$("input[name='education']:checked").each(function(i){
				school_List += $(this).val();
			})
			var dpt_code= $("select[name='dept_code']").val();
			
			
			var s_List = "";
			var a_List = "";

			
			//문자열로 입력받은 기술 > skillList2의 id값과 비교해야함
			var addSkill= $("input[name='addSkill']").val();
			addSkill=addSkill.toLowerCase();
			var addSkillCode="";
			//skillList2를 받을 리스트
			var Skill_List2=[];

			
			$("input[name='skillList2']").each(function(i){
				Skill_List2.push($(this).val());
			})
			
			console.log(Skill_List2);
			//Skill_List2의 값을 split("-")로 쪼개, 배열의 1번(lowercase)과 비교후 0번을 가져옴
			for(var i = 0 ; i<Skill_List2.length;i++){
				var strSkill = Skill_List2[i].split('-');
				strSkill[1]=strSkill[1].toLowerCase();
				if(addSkill==strSkill[1]){
					addSkillCode=strSkill[0];
				}
			}
			console.log("과연값을잘받아왔을지?"+addSkillCode);
			

			
			
			$("input[name='skillList']:checked").each(function(i){
				s_List += $(this).val();
			})
			
			//addMethod의 값이 or이라면 skillList에 추가, and라면 Criteria의 add 변수에 담기
			var add="";
			var isAdd="N";
			var addMethod=$("input[name='add_method']:checked").val();
			if(addMethod=="or"){
				isAdd="O";
				s_List += addSkillCode;
			}else if(addMethod=="and"){
				add=addSkillCode;
				isAdd="A";
			}
			console.log(addMethod);
			console.log("isAdd==========="+isAdd);
			console.log("add-==============="+add);
			console.log("addSkillCode========="+addSkillCode);
			var y = document.getElementById("year1");
			var grad_y1 = y.options[y.selectedIndex].text*1; 
			var m = document.getElementById("month1");
			var grad_m1 = m.options[m.selectedIndex].text; 
			var d = document.getElementById("day1");
			var grad_d1 = d.options[d.selectedIndex].text;

			
			y = document.getElementById("year2");
			var grad_y2 = y.options[y.selectedIndex].text*1
			m = document.getElementById("month2");
			var grad_m2 = m.options[m.selectedIndex].text; 
			d = document.getElementById("day2");
			var grad_d2 = d.options[d.selectedIndex].text;
			

			if(grad_d1.length===1){
				var d_=grad_d1
				grad_d1="0"+d_;
			}
			if(grad_d2.length===1){
				var d_=grad_d2
				grad_d2="0"+d_;
			}

			
			if(grad_m1.length===1){
				var m_=grad_m1
				grad_m1="0"+m_;
			}
			if(grad_m2.length===1){
				var m_=grad_m2
				grad_m2="0"+m_;
			}

			
			var g_day1 = grad_y1+"-"+grad_m1+"-"+grad_d1;
			var g_day2 = grad_y2+"-"+grad_m2+"-"+grad_d2;
			var g_OK1=(/\d{4}\-\d{2}\-\d{2}/g).test(g_day1)
			var g_OK2=(/\d{4}\-\d{2}\-\d{2}/g).test(g_day2)
			var g1 = new Date(g_day1);
			var g2 = new Date(g_day2);
			
			
			var type = "";
			var isSkill = "P";
			if(name){
				type +="N";
			}
			if(sex){
				type +="J"
			}
			if(!school_List.length==0){
				type +="S"
			}
			if(dpt_code){
				type +="D"
			}
			if(!s_List.length==0){
				isSkill="Y"
			}// 검색조건 입력
			if(g_OK1&&g_OK2&&g1<g2){
				type +="G"
			}
			
			staffInfoService.getPage({
				pageNum:page,
				amount:5,
				type:type,
				keyword:name,
				sex:sex,
				dept:dpt_code,
				edu:school_List,
				skill:s_List,
				isSkill:isSkill,
				year1:grad_y1,
				month1:grad_m1,
				day1:grad_d1,
				year2:grad_y2,
				month2:grad_m2,
				day2:grad_d2,
				isAdd:isAdd,
				add:add,
				condition:condition,
				method:method},
			function(pageMaker){
				if(pageMaker.prev){
					str1+="<li class='paginate_button previous' onclick ='movePage("+(pageMaker.startPage-1)+")' >이전</a></li>"
				}
				for(var i = pageMaker.startPage; i<pageMaker.endPage+1;i++ ){
					if(i==page){
					str1+="<li class='paginate_button' onclick ='movePage("+i+")'>["+i+"]</a></li>";
				}else{
						str1+="<li class='paginate_button' onclick ='movePage("+i+")'>"+i+"</a></li>";
					}
				}
				if(pageMaker.next){
					str1+="<li class='paginate_button next' onclick ='movePage("+((pageMaker.endPage*1)+1)+")'>다음</a></li>"
				}
				pagination.html(str1);
				total.html("총 "+pageMaker.total+"건");
				
			})
			
			staffInfoService.search({
				pageNum:page,
				amount:5,
				type:type,
				keyword:name,
				sex:sex,
				dept:dpt_code,
				edu:school_List,
				skill:s_List,
				isSkill:isSkill,
				year1:grad_y1,
				month1:grad_m1,
				day1:grad_d1,
				year2:grad_y2,
				month2:grad_m2,
				day2:grad_d2,
				isAdd:isAdd,
				add:add,
				condition:condition,
				method:method},
			function(list){
				if(list == null || list.length ==0){ }
				str+='<input type="hidden" id="m1" name="m1" value="rownum"/>'
				str+='<input type="hidden" id="m2" name="m2" value="staff_name"/>'
				str+='<input type="hidden" id="m3" name="m3" value="sex"/>'
				str+='<input type="hidden" id="m4" name="m4" value="department_name"/>'
				str+='<input type="hidden" id="m5" name="m5" value="g_day"/>'
					
				str+="<table style='width: 80%'>";
				
				str+="<tr><th>번호"+'<div name="sort1" onclick="sortCount(m1)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter"  viewBox="0 0 16 16" >'+
				  '<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>'+
				  '</svg></div>'+"</th>";
				str+="<th>이름"+'<div name="sort1" onclick="sortCount(m2)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16" >'+
				  '<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>'+
					  '</svg></div>'+"</th>";
				str+="<th>성별"+'<div name="sort1" onclick="sortCount(m3)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">'+
				  '<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>'+
				  '</svg></div>'+"</th>";
				str+="<th>부서"+'<div name="sort1" onclick="sortCount(m4)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">'+
				  '<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>'+
				  '</svg></div>'+"</th>";
				str+="<th>졸업일"+'<div name="sort1" onclick="sortCount(m5)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">'+
				  '<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>'+
				  '</svg></div>'+"</th>";
				str+="<th>  </th></tr>";
				
				for(var i=0, len=list.length||0;i<len;i++){	
				str+="<tr>";
				str+="<td>"+list[i].rn+"</td>";
				str+="<td>"+list[i].staff_name+"</td>";
				if(list[i].sex==1|list[i].sex==3){
					str+="<td>"+"남"+"</td>";	
				}else{
					str+="<td>"+"여"+"</td>";
				}
				
				str+="<td>"+list[i].department_name+"</td>";
				str+="<td>"+list[i].graduate_day+"</td>";
				str+="<td><button id='upDel' value='"+list[i].staff_no+"' onclick = upDelLink("+list[i].staff_no+") >수정/삭제</button>";
				str+="</tr>"
				}
				result.html(str);
				})
		
	}
	
	
	$("#searchAll").on("click", (function(e){
		var page=1;
		search(page);
	}))
			
	$("#reset").on("click", function(e){
			self.location="staff_search_form";
	})

	
	window.upDelLink= function(staff_no){

		var url="staff_updel_form?staff_no="+staff_no;
		var name = "Update_or_Delete";
		var option="location= no,height=100";
		console.log(url);
		window.open(url,name,option);
	}
	
	window.movePage = function(pageNum){
		var page= pageNum;
		search(page);
	}
	
	window.checkOnlyOneM=function(element){
		const checkboxes 
	      = document.getElementsByName("add_method");

	  checkboxes.forEach((cb) => {
	    cb.checked=false;
	  })
	  element.checked=true;
	  
	}
	

	$("#search").on("click",function(pageNum){
		var page=1;
		search(page);
	})
	
	
		
		console.log("js 작동");

		$("#register").on("click", function(e){
			e.preventDefault(e);
			var url = "staff_input_form";
			var name= "Register_new_Staff";
			var option="location= no,height=100";
			window.open(url,name,option);
		})
})