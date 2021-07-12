$(document).ready(function(){
	
console.log(window.location.href);
	
	$("#search").on("click",function(pageNum){
		var page=1;
		search(page);
	})
	
	function search(page){
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
			var addMethod=$("select[name='add_method']").val();
			
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
			console.log(grad_m1);

			
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
				day2:grad_d2
			},
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
				day2:grad_d2
			},
			function(list){
				if(list == null || list.length ==0){ }
				str+="<table style='width: 80%'>";
				str+="	<tr><th>번호</th>";
				str+="<th>이름</th>";
				str+="<th>성별</th>";
				str+="<th>부서</th>";
				str+="<th>졸업일</th>";
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
		      = document.getElementsByName("addMethod");

		  checkboxes.forEach((cb) => {
		    cb.checked=false;
		  })

		  element.checked=true;
		
	}
	
	
		
		console.log("js 작동");

		$("#register").on("click", function(e){
			e.preventDefault(e);
			var url = "staff_input_form";
			var name= "Register_new_Staff";
			var option="location= no,height=100";
			window.open(url,name,option);
		})
})