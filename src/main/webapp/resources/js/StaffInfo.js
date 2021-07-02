console.log("StaffInfo Module......");

var StaffInfoService=(function(){
	
	function getCode(callback, error){
		$.getJSON("/code", 
				function(data){
			if(callback){
				callback(data);
			}
		}).fail(function(xhr,status,err){
			if(error){
				error();
			}
		});
	}//getCode 함수 끝
	return{getCode:getCode}
})