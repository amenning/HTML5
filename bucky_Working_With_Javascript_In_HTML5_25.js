function getStuff(){
	document.querySelector('#tuna').onclick=talk; /*Select only the very first element with an ID of tuna and onclick call talk function*/
}

function talk(){
	alert('yoyoma!');
}

window.onload=getStuff;