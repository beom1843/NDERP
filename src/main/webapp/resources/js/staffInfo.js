console.log("StaffInfo Module......");

var staffInfoService=(function(){
	
	function getDept(param,callback,error){
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
	}/*getList 함수 끝*/
	
	return{
		getDept:getDept
	}
})