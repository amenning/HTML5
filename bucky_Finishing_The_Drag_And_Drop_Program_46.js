function doFirst(){
	mypic = document.getElementById("colorpic");
	mypic.addEventListener("dragstart", startDrag, false);
	
	leftbox = document.getElementById("leftbox");
	leftbox.addEventListener("dragenter", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("drop", droppedLeft, false);
	
	rightbox = document.getElementById("rightbox");
	rightbox.addEventListener("dragenter", function(e){e.preventDefault();}, false);
	rightbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	rightbox.addEventListener("drop", droppedRight, false);
}

function startDrag(e){
	var code = '<img id="colorpic" src="green.png" height="200" width="200">';
	e.dataTransfer.setData('Text', code);
}

function droppedLeft(e){
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');
	rightbox.innerHTML = "";
	mypic = document.getElementById("colorpic");
	mypic.addEventListener("dragstart", startDrag, false);
}

function droppedRight(e){
	e.preventDefault();
	rightbox.innerHTML = e.dataTransfer.getData('Text');
	leftbox.innerHTML = "";
	mypic = document.getElementById("colorpic");
	mypic.addEventListener("dragstart", startDrag, false);
}

window.addEventListener("load", doFirst, false);