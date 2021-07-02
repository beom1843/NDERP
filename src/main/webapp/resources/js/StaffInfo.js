console.log("StaffInfo Module......");

var staffInfoService=(function(){
	
//	function getCode(callback, error){
//		$.getJSON("/code", 
//				function(data){
//			if(callback){
//				callback(data);
//			}
//		}).fail(function(xhr,status,err){
//			if(error){
//				error();
//			}
//		});
//	}//getCode 함수 끝

	function getDept(callback, error){
		$.getJSON("/codeDept", 
				function(data){
			if(callback){
				callback(data);
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
	
	return{/*getCode:getCode*/
		getDept:getDept,
		getSkill:getSkill,
		getSchool:getSchool
	}
})