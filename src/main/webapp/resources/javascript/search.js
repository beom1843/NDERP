$(document).ready(function(){
			
		console.log("js 작동");

		$("#register").on("click", function(e){
			e.preventDefault();
			var url = "staff_input_form";
			var name= "사원 정보 등록";
			var option="location= no, height=100";
			window.open(url,name,option);
		})
})