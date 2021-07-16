	$(document).ready(function(){
	/* 코드 불러오기 */
		var DeptDropdown = $(".dept_dropdown");
		var EduRadio = $(".education_radio");
		var SkillChk=$(".skill_checkbox");
		var SkillAdd=$(".skill_added");
		var SkillHidden=$(".hidden_skill");
		
		getCode();
		function getCode(){
			
			staffInfoService.getDept(
				function(deptList){
					console.log("inside deptlist");
					var str = "";
				if(deptList == null || deptList.length ==0){ }
				str += "<select id='dept_code' name='dept_code' class='criteria'>";
				str += "<option value='' selected disabled hidden></option>"
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
					str +="<input type='checkbox' id='education' name='education' onclick ='checkOnlyOne(this)' class='criteria' value='"+schoolList[i].school_code+"' />";
					str += schoolList[i].school_name;
					}
					EduRadio.html(str);
					
				});
			
			
			staffInfoService.getSkill(
					function(skillList){
						var str = "";
						var str1="";
						if(skillList == null || skillList.length ==0){ }
						for(var i=0, len=5||0;i<len;i++){
						str +="<input type='checkbox' id='skillList' name='skillList' class='criteria' value='"+skillList[i].skill_code+"' />";
						str += skillList[i].skill_name;
						}
						SkillChk.html(str);
						if(!(window.location.href=="http://localhost:8081/staff_search_form")){
						for(var i=5,len=skillList.length;i<len;i++){
							console.log("inside js Module--------"+skillList[i].skill_name)
						str1 +="<input type='checkbox' id='skillList' name='skillList' value='"+skillList[i].skill_code+"' />";
						str1 += skillList[i].skill_name;
						}
						SkillAdd.html(str1);
						}else{
						for(var i=5,len=skillList.length;i<len;i++){
						str1 +="<input type='hidden' name='skillList2' value='"+skillList[i].skill_code+"-"+skillList[i].skill_name+"' />";
						}
						SkillHidden.html(str1);
						}
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
		
	window.checkOnlyOne=function(element){
		if(!(window.location.href=="http://localhost:8081/staff_search_form")){
			const checkboxes 
		      = document.getElementsByName("education");

		  checkboxes.forEach((cb) => {
		    cb.checked = false;
		  })

		  element.checked = true;
		
		}else{
			return null;
		}
	}


	
	
	
})