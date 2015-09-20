function doFirst(){
	mypic = document.getElementById("colorpic");
	mypic.addEventListener("dragstart", startDrag, false);
	
}


window.addEventListener("load", doFirst, false);