$(document).ready(function(){
		
	window.checkOnlyOneX=function(element){
		  const checkboxes 
		      = document.getElementsByName("sex");

		  checkboxes.forEach((cb) => {
		    cb.checked = false;
		  })

		  element.checked = true;
		}
		
		console.log("js 작동");

		$("#register").on("click", function(e){
			e.preventDefault();
			var url = "staff_input_form";
			var name= "Register_new_Staff";
			var option="location= no,height=";
			window.open(url,name,option);
		})
})