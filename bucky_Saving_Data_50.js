function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", saveCrap, false);
}

function saveCrap(){
	var one = document.getElementById("one").value; //key 
	var two = document.getElementById("two").value; //value
	sessionStorage.setItem(one,two); 	
	
	
}

window.addEventListener("load", doFirst, false);