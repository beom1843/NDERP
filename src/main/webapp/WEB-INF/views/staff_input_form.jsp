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

	
	<!-- StaffInfo Module -->
	<script src="/resources/javascript/StaffInfo.js"></script>

	<!-- jQuery library -->
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
	
	<!-- CSS -->
	<link rel="stylesheet" type="text/css"	href="/resources/css/table.css" />
	<link rel="stylesheet" type="text/css"	href="/resources/css/input.css" />


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
			<td>
				<select class="year" id="year1" title="년도"	></select>년 
				<select class="month" id="month1" title="월" ></select>월 
				<select	class="day" id="day1" title="일" ></select>일
			</td>
			<th>추가 기술</th>
			<td colspan="5">
				<div class="skill_added">
				</div>
			</td>
		</tr>

		
	</table>
	
<button id="submit" value="등록">등록</button>
<button id="reset" value="초기화">초기화</button>

	<!-- Setting.js -->
	<script src="/resources/javascript/setting.js"></script>
	<!-- Input.js -->
	<script src="/resources/javascript/input.js"></script>	
	
</body>
</html>