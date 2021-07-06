console.log("StaffInfo Module......");

var staffInfoService=(function(){

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
	
	function add(wrapper, callback, error){
		console.log("wrapper..........");
	$.ajax({
		type: 'post',
		url: '/new',
		data: JSON.stringify(wrapper),
		contentType: "application/json; charset=utf-8",
		success: function(result, status, xhr){
			if(callback){
				callback(result);
			}
		},
		error: function(xhr, status, er){
		console.log("========add_if_error========")
			if(error){
				error(er);
			}
		}	
		})
	}/*add 함수 끝*/
	
	function get(param,callback, error){
		var staff_no = param.staff_no;
		$.getJSON("/get/"+staff_no+".json", 
				function(data){
			if(callback){
				callback(data);
			}
		}).fail(function(xhr,status,err){
			if(error){
				error();
			}
		});
	}
	
	function update(data,callback, error){
		
		$.ajax({
			type: 'put',
			url: '/update',
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			success : function(result, status, xhr){
				if(callback){
					callback(result);
				}
			},
			error:function(xhr, status, er){
				if(error){
					error(er)
				}
			}
		});
	}
	
	
	return{
		getDept:getDept,
		getSkill:getSkill,
		getSchool:getSchool,
		add:add,
		get:get,
		update:update
	}
})
()