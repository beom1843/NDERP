$(document).ready(function(){
	
	
	$("#searchAll").on("click", (function(e){
		var str	="";
		var result = $(".result");
		
		staffInfoService.getList({
			pageNum:1
		},function(list){
		if(list == null || list.length ==0){ }
		str+="<table style='width: 100%'>";
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
		str+="</tr>"
		}
		result.html(str);
		});
	}))
	
	
	
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
			e.preventDefault();
			var url = "staff_input_form";
			var name= "Register_new_Staff";
			var option="location= no,height=";
			window.open(url,name,option);
		})
})