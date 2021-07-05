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
	
	<!-- jQuery library -->
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
	
	<!-- StaffInfo.js -->
	<script type="text/javascript" src="/resources/js/staffInfo.js"></script>
	
	<!-- CSS -->
	<script type="text/javascript" src="/resources/css/table.css"></script>

	<style>
	table, th, td {
		border: 1px solid black;
		border-collapse: collapse;
	}
	
	th, td {
		padding: 5px;
	}
	th{
		text-align: center;
	
	}
	</style>
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
			<td><input type="text" id="name" name="name"> - <input type="password" id="name" name="name"></td>
			<th>부서</th>
			<td>

				<div class="dept_dropdown">
				
					<select id="dept_code" >
						<c:forEach items = "${codeDept}" var = "dept">
							<option value="${dept.department_code}">
								<c:out value="${dept.department_name}"/>
							</option>
						</c:forEach>
					</select>
				</div>

			</td>
		</tr>

		<tr>
			<th>학력</th>
			<td>
				<div class="education_radio">
				<c:forEach items = "${codeSchool}" var = "education">
					<input type="radio" name="education" value="${education.school_code }" />
						<c:out value="${education.school_name}"/>
				</c:forEach>
				</div>
			</td>
			<th>기술</th>
			<td colspan="3">
				<div class="skill_checkbox">
				<c:forEach items = "${codeSkill}" var = "skill">
					<input type="checkbox" value="${skill.skill_code }"/>
						<c:out value="${skill.skill_name }"/>
				</c:forEach>
				</div>
			</td>
		</tr>

		<tr>
			<th>졸업일</th>
			<td colspan="5"></td>
		</tr>
	</table>
	
	
	<script type="text/javascript">
		 $(document).ready(function(){
		console.log("js 작동");
		var DeptDropdown = $(".dept_dropdown");
		var EduRadio = $(".education_radio");
		var SkillChk=$(".skill_checkbox");
		
		getCode();
		
		function getCode(){
			
		staffInfoService.getDept(function(deptList){
			var str = "";
			if(list == null || deptList.length ==0){
			}
			str += "<select id='dept_code'>";
		for(var i=0, len=deptList.length||0;i<len;i++){
			console.log(deptList.department_name);
			str += "<option value='"+deptList.department_code+"'>"+deptList.department_name+"</option>";
		}
		str += "</select>";
		console.log(str);
		DeptDropdown.html(str);
		
		});
	
		}
	
	}); 
	
	
	
	</script>
</body>
</html>