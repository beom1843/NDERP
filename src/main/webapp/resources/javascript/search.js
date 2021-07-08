$(document).ready(function(){
	
	function paginate(page){

		var str=""
		var pagination = $(".pagination");
		
			staffInfoService.paginate({
			pageNum: page
		},function(pageMaker){
			if(pageMaker.prev){
				str+="<li class='paginate_button previous' onclick ='movePage("+(pageMaker.startPage-1)+")' >이전</a></li>"
			}
			for(var i = pageMaker.startPage; i<pageMaker.endPage+1;i++ ){
				if(i==page){
					str+="<li class='paginate_button' onclick ='movePage("+i+")'>["+i+"]</a></li>";
				}else{
					str+="<li class='paginate_button' onclick ='movePage("+i+")'>"+i+"</a></li>";
				}
			}
			if(pageMaker.next){
				str+="<li class='paginate_button next' onclick ='movePage("+((pageMaker.endPage*1)+1)+")'>다음</a></li>"
			}
			pagination.html(str);
		})
		
		}
	
	function searchResult(page){
		var hidden=$(".pageNum");
		hidden.html("<input type='hidden' name='pageNum' value='"+page+"' />")
		var str	="";
		var result = $(".result");
		staffInfoService.getList({
			pageNum:page
		},function(list){
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
		});
	}
	

	
	$("#searchAll").on("click", (function(e){
		var page=1;
		paginate(page);
		searchResult(page);
		
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
		paginate(page);
		searchResult(page);
	}
	
	
	window.checkOnlyOneX=function(element){
		  const checkboxes 
		      = document.getElementsByName("sex");

		  checkboxes.forEach((cb) => {
		    cb.checked = false;
		  })

		  element.checked = true;
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