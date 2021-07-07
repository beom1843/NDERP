$(document).ready(function(){

	
	
		$("#reset").on("click", function(e){
			self.location="staff_input_form";
		}) 
		
		$("#submit").on("click",(function(e){
			e.preventDefault();
			var name= $("input[name='name']").val();
			
			var j1= $("input[name='jumin_1']").val();
			var j2= $("input[name='jumin_2']").val();
			var j = j1+"-"+j2;
			var sch_code= $("input[name='education']:checked").val();
			var dpt_code= $("select[name='dept_code']").val();

			var y = document.getElementById("year1");
			var grad_y = y.options[y.selectedIndex].text; 
			var m = document.getElementById("month1");
			var grad_m = m.options[m.selectedIndex].text; 
			var d = document.getElementById("day1");
			var grad_d = d.options[d.selectedIndex].text;
			if(grad_m.length===1){
				var m1=grad_m
				grad_m="0"+m1;
			}
			if(grad_d.length===1){
				var d1=grad_d
				grad_d="0"+d1;
			}

			var g_day = grad_y+"-"+grad_m+"-"+grad_d;
			var s_List = [];
			$("input[name='skillList']:checked").each(function(i){
				s_List.push($(this).val());
			})
			
			//alert 메시지 만들기
			var message ="";
			console.log(j);
			console.log(g_day);
			console.log("S"+sch_code);
			console.log("SK"+s_List.length);
			var j_OK= (/\d{6}\-[1-4]\d{6}/g).test(j);
			var isAllOK =0;
			
			var g_OK=(/\d{4}\-\d{2}\-\d{2}/g).test(g_day)
			
			if(!g_OK){
				message += "정확한 날짜를 입력해주세요.\n"
				isAllOK+=1;
			}
			if(!j_OK){
				message += "정확한 주민등록번호를 입력해주세요.\n"
				isAllOK+=1;
			}
			if(!(name&sch_code&dpt_code&!(g_day=="년도-0월-0일")&!(j=="-"))){
				message += "[미입력 사항]"
			}
			if(isAllOK !==0){
				alert(message);
			}else{
				staffInfoService.add({
					staff_name:name,
					jumin_no:j,
					school_code:sch_code,
					department_code:dpt_code,
					graduate_day:g_day,
					skill_list:s_List
				},
				function(result){
					alert("RESULT:"+result)
				});
			}
			
		}));
		
		
	
	}); 