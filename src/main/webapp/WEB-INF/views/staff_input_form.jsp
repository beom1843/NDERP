<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>**사원정보 등록**</title>
	

	
	<!-- StaffInfo.js -->
	<script src="/resources/javascript/StaffInfo.js"></script>
	
		<!-- jQuery library -->
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
	
	<!-- CSS -->
	<link rel="stylesheet" type="text/css"	href="/resources/css/table.css" />


</head>
<body>

	<table style="width: 100%">
		<tr>
			<th colspan="6">사원 정보 등록</th>
		</tr>

		<tr>
			<th>이름</th>
			<td><input type="text" id="name" name="name"></td>
			<th>주민번호</th>
			<td><input type="text" id="jumin_1" name="jumin_1" size="7">
			-
			<input type="password" id="jumin_2" name="jumin_2" size="7"> </td>
			<th>부서</th>
			<td>

				<div class="dept_dropdown">
				</div>

			</td>
		</tr>

		<tr>
		
			<th>학력</th>
			<td>
				<div class="education_radio">
				</div>
			</td>
			
			<th>기술</th>
			<td colspan="3">
				<div class="skill_checkbox">
				</div>
			</td>
			
		</tr>

		<tr>
			<th>졸업일</th>
			<td colspan="5">
				<select class="year" id="year1" title="년도"	></select>년 
				<select class="month" id="month1" title="월" ></select>월 
				<select	class="day" id="day1" title="일" ></select>일
			</td>
		</tr>
	</table>
	
<button id="submit" value="등록">등록</button>
<button id="reload" value="초기화">초기화</button>

	
	
	<script>
	
		$(document).ready(function(){
			
		console.log("js 작동");
		
		$("#submit").on("click",(function(e){
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

			var g_day = grad_y+"."+grad_m+"."+grad_d;
			var s_List = [];
			$("input[name='skillList']:checked").each(function(i){
				s_List.push($(this).val());
			})
			console.log("스킬"+s_List);
			console.log("주민"+j);
			console.log("학력"+sch_code);
			console.log("부서"+dpt_code);
			console.log("졸업일"+g_day);
			
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
			
		}));
		
		
		/* 코드 불러오기 */
		var DeptDropdown = $(".dept_dropdown");
		var EduRadio = $(".education_radio");
		var SkillChk=$(".skill_checkbox");
		
		getCode();
		function getCode(){
			
			staffInfoService.getDept(
				function(deptList){
					console.log("inside deptlist");
					var str = "";
				if(deptList == null || deptList.length ==0){ }
				str += "<select id='dept_code' name='dept_code'>";
				for(var i=0, len=deptList.length||0;i<len;i++){
					str += "<option value='"+deptList[i].department_code+"'>"+deptList[i].department_name+"</option>";
				}
				str += "</select>";
				DeptDropdown.html(str);
				});
			
			staffInfoService.getSchool(
				function(schoolList){
					var str = "";
					if(schoolList == null || schoolList.length ==0){ }
					for(var i=0, len=schoolList.length||0;i<len;i++){
					str +="<input type='radio' name='education' value='"+schoolList[i].school_code+"' />";
					str += schoolList[i].school_name;
					}
					EduRadio.html(str);
				});
			
			staffInfoService.getSkill(
					function(skillList){
						var str = "";
						if(skillList == null || skillList.length ==0){ }
						for(var i=0, len=skillList.length||0;i<len;i++){
						str +="<input type='checkbox' name='skillList' value='"+skillList[i].skill_code+"' />";
						str += skillList[i].skill_name;
						}
						SkillChk.html(str);
					})
			
		}//getCode, 코드불러오기 끝
		
		
		setDateBox();
		function setDateBox() {
			var dt = new Date();
			var year = "";
			var com_year = dt.getFullYear();

			// 발행 뿌려주기
			$(".year").append("<option value=''>년도</option>");

			// 올해 기준으로 -50년부터 +1년을 보여준다.
			for (var y = (com_year); y >= (com_year - 50); y--) {
				$(".year").append("<option value='" + y + "'>" + y + "</option>");
			}

			// 월 뿌려주기(1월부터 12월)
			var month;
			$(".month").append("<option value=''>월</option>");
			for (var i = 1; i <= 12; i++) {
				$(".month").append("<option value='" + i + "'>" + i + "</option>");
			}

			// 일 뿌려주기(1일부터 31일)
			var day;
			$(".day").append("<option value=''>일</option>");
			for (var i = 1; i <= 31; i++) {
				$(".day").append("<option value='" + i + "'>" + i + "</option>");
			}

		}//setDateBox 끝
		
		
		
	
	}); 
	
	
	
	</script>
</body>
</html>