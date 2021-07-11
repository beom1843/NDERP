$(document).ready(function(){
	
	var s_no = $("#staff_no").val();
	
	//Staff 가져오기
	
	staffInfoService.get({
		staff_no:s_no
	}, function(staff){
		$("#name").val(staff.staff_name);
		
		var j = staff.jumin_no;
		var idx = j.indexOf("-",0);
		var j1 = j.substr(0,idx);
		var j2 = j.substr(idx+1);
		
		$("#jumin_1").val(j1);
		$("#jumin_2").val(j2);
		
		var g=staff.graduate_day;
		var y = g.substring(0,4);
		var m = g.substring(5,7);
		var d = g.substring(8,10);
		
		m*=1;
		d*=1;
		
		$("#year1").val(y);
		$("#month1").val(m);
		$("#day1").val(d);

		$('#dept_code').val(staff.department_code).prop('selected',true);
		
		$('input:radio[name=education]:input[value=' + staff.school_code + ']').attr("checked", true);
		
		var s_list=staff.skill_list;
		
		 for (var skill_code  in s_list) {
             $("input[name=skillList][value="+s_list[skill_code]+"]").prop("checked",true);
			 }    
		
	})// Staff 정보 불러오기 끝
	
	$("#update").on("click", (function(e){
		e.preventDefault();
		var name= $("input[name='name']").val();
		var j1= $("input[name='jumin_1']").val();
		var j2= $("input[name='jumin_2']").val();
		var j = j1+"-"+j2;
		var sch_code= $("input[name='education']").val();
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
		
		staffInfoService.update({
			staff_no:s_no,
			staff_name:name,
			jumin_no:j,
			school_code:sch_code,
			department_code:dpt_code,
			graduate_day:g_day,
			skill_list:s_List
		},
		function(result){
			alert(result+": 수정되었습니다!")
			window.open("about:blank","_self").close();
		});
	}))// update 버튼 클릭 이벤트
	
	$("#delete").on("click", (function(e){
		e.preventDefault();
		
		
		if(confirm("정말 삭제하시겠습니까?")){

			staffInfoService.remove({
				staff_no:s_no
			},
			function(result){
				alert(result+":삭제되었습니다!")
				window.open("about:blank","_self").close();
			})
		}
		
	}))// delete 버튼 클릭 이벤트
	
})