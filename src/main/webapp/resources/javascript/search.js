$(document).ready(function(){
			
		console.log("js 작동");

		$("#register").on("click", function(e){
			e.preventDefault();
			var url = "staff_input_form";
			var name= "Register_new_Staff";
			var option="location= no,height=";
			window.open(url,name,option);
		})
})