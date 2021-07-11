$(document).ready(function(){
	
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
			var school_List = "";
			$("input[name='education']:checked").each(function(i){
				school_List += $(this).val();
			})
			var dpt_code= $("select[name='dept_code']").val();
			var s_List = "";
			$("input[name='skillList']:checked").each(function(i){
				s_List.push += $(this).val();
			})
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
			
			staffInfoService.getPage({
				pageNum:page,
				amount:5,
				type:type,
				keyword:name,
				sex:sex,
				dept:dpt_code,
				edu:school_List,
				skill:s_List,
				isSkill:isSkill	
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
				isSkill:isSkill
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
	
	
		
		console.log("js 작동");

		$("#register").on("click", function(e){
			e.preventDefault(e);
			var url = "staff_input_form";
			var name= "Register_new_Staff";
			var option="location= no,height=100";
			window.open(url,name,option);
		})
})