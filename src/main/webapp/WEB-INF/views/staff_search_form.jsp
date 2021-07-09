<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>**사원정보 검색**</title>
	<!-- StaffInfo.js -->
	<script src="/resources/javascript/StaffInfo.js"></script>
	
	<!-- jQuery library -->
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
	
	<!-- CSS -->
	<link rel="stylesheet" type="text/css"	href="/resources/css/table.css" />
	<link rel="stylesheet" type="text/css"	href="/resources/css/search.css" />

</head>
<body>

	<table style="width: 100%">
		<tr>
			<th colspan="6">사원 정보 검색</th>
		</tr>

		<tr>
			<th>이름</th>
			<td><input type="text" id="name" name="name"></td>
			<th>성별</th>
			<td>
			<input type='checkbox' id='sex' name='sex'  value="M">남
			<input type='checkbox' id='sex' name='sex'  value="F">여
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
	</table>
	
	<button id="search" value="검색">검색</button>
	<button id="searchAll" value="전부검색">전부검색</button>
	<button id="reset" value="초기화">초기화</button>
	<button id="register" value="등록">등록</button>

	
	<div class="total"></div>
	<div class="result"></div>
	<div class="pagination"></div>
	<div class="pageNum"></div>
	
	<!-- Setting.js -->
	<script src="/resources/javascript/setting.js"></script>
	<!-- Search.js -->
	<script src="/resources/javascript/search.js"></script>	

</body>
</html>