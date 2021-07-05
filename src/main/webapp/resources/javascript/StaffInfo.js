console.log("StaffInfo Module......");

var staffInfoService=(function(){
	

//	function getDept(callback, error){
//		console.log("getDept...........");
//		$.getJSON("/codeDept", 
//				function(data){
//			if(callback){
//				callback(data);
//			}
//		}).fail(function(xhr,status,err){ 
//			if(error){
//				error();
//			}
//		});
//	}//getDept 함수 끝
	
	function getDept(callback, error){
		console.log("getDept...........");
		$.getJSON("/codeDept", 
				function(deptList){
			if(callback){
				callback(deptList);
			}
		}).fail(function(xhr,status,err){ 
			if(error){
				error();
			}
		});
	}//getDept 함수 끝
	
	function getSkill(callback, error){
		$.getJSON("/codeSkill", 
				function(data){
			if(callback){
				callback(data);
			}
		}).fail(function(xhr,status,err){
			if(error){
				error();
			}
		});
	}//getSkill 함수 끝
	function getSchool(callback, error){
		$.getJSON("/codeSchool", 
				function(data){
			if(callback){
				callback(data);
			}
		}).fail(function(xhr,status,err){
			if(error){
				error();
			}
		});
	}//getSchool 함수 끝
	
	function setDateBox(){
		
	}
	
	
	return{
		getDept:getDept,
		getSkill:getSkill,
		getSchool:getSchool,
	}
})
()