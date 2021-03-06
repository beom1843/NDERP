<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>**사원정보 검색**</title>
	<!-- StaffInfo.js -->
	<script src="/resources/javascript/StaffInfo.js"></script>
	
	<!-- jQuery library -->
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
	
	<!-- icon Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	
	<!-- CSS -->
	<link rel="stylesheet" type="text/css"	href="/resources/css/table.css" />
	<link rel="stylesheet" type="text/css"	href="/resources/css/search.css" />

</head>
<body>
	<input type="hidden" id="redirect" value="<c:out value ='${redirect}'/>">
	


	<table style="width: 100%" class="search_table">
		<tr>
			<th colspan="6">사원 정보 검색</th>
		</tr>

		<tr>
			<th>이름</th>
			<td><input type="text" id="name" name="name" class="criteria"></td>
			<th>성별</th>
			<td>
			<input type='checkbox' id='sex' name='sex'  value="M" class="criteria">남
			<input type='checkbox' id='sex' name='sex'  value="F" class="criteria">여
			</td>
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
				<select class="month" id="month1" title="월"></select>월 
				<select	class="day" id="day1" title="일"></select>일
						~
				<select class="year" id="year2" title="년도"></select>년 
				<select class="month" id="month2" title="월"></select>월 
				<select	class="day" id="day2" title="일"></select>일		
			</td>
		</tr>
		
		<tr>
			<th>추가 기술</th>
			<td colspan="5">
						<div class="hidden_skill"></div>
				<input type="text" id="addSkill" name="addSkill" class="criteria">
				<input type="checkbox" value="and" name="add_method" onclick="checkOnlyOneM(this)" class="criteria"/>AND
				<input type="checkbox" value="or" name="add_method" onclick="checkOnlyOneM(this)" class="criteria"/>OR
				<div id ="message_add">  - eGovFrame, Nexacro, Spring, Vue.js의 추가기술을 검색할 수 있습니다.</div>
			</td>
		</tr>
	</table>
	
	<button id="search" value="검색">검색</button>
	<button id="searchAll" value="전부검색">전부검색</button>
	<button id="reset" value="초기화">초기화</button>
	<button id="register" value="등록">등록</button>

	
	<div class="total"></div>
	<div class="result"></div>
	<div class="pagination"></div>
	
	<!-- Setting.js -->
	<script src="/resources/javascript/setting.js"></script>
	<script>
	
	
	</script>
	<!-- Search.js -->
	<script src="/resources/javascript/search.js"></script>	


</body>
</html>