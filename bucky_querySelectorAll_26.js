function getStuff(){
	var list = document.querySelectorAll('#tuna'); /*Select all elements with an ID of tuna and return it as an array*/
	for(var i=0;i<list.length;i++){
		list[i].onclick=talk;
	}
}

function talk(){
	alert('yoyoma!');
}

window.onload=getStuff;