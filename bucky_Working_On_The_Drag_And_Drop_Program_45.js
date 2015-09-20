function doFirst(){
	mypic = document.getElementById("colorpic");
	mypic.addEventListener("dragstart", startDrag, false);
	
	leftbox = document.getElementById("leftbox");
	leftbox.addEventListener("dragenter", function(e){e.preventDefault;}, false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault;}, false);
	leftbox.addEventListener("drop", dropped, false);
}


window.addEventListener("load", doFirst, false);