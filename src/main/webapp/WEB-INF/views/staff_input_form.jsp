<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
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
			<td>주민번호 빈칸</td>
			<th>부서</th>
			<td>
			<select id="derpartment_code" >
					<option value="크롬">크롬</option>
					<option value="사파리">사파리</option>
					<option value="엣지">엣지</option>
					<option value="인터넷익스플로러">인터넷익스플로러</option>
					<option value="파이어폭스">파이어폭스</option>
					<option value="오페라">오페라</option>
			</select>
			</td>
		</tr>

		<tr>
			<th>학력</th>
			<td></td>
			<th>기술</th>
			<td colspan="3">
				<input type="checkbox">java
				<input type="checkbox">jsp
				<input type="checkbox">asp
			</td>
		</tr>

		<tr>
			<th>졸업일</th>
			<td colspan="5"></td>
		</tr>
	</table>
</body>
</html>