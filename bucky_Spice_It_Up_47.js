function doFirst(){
	mypic = document.getElementById("colorpic");
	mypic.addEventListener("dragstart", startDrag, false);
	mypic.addEventListener("dragend", endDrag, false);
	
	leftbox = document.getElementById("leftbox");
	leftbox.addEventListener("dragenter", dragEnter, false);
	leftbox.addEventListener("dragleave", dragLeave, false);
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

function endDrag(e){
	pic = e.target; 
	pic.style.visibility = 'hidden';
}

function dragEnter(e){
	e.preventDefault();
	leftbox.style.background="SkyBlue";
	leftbox.style.border="3px solid red";
}

function dragLeave(e){
	e.preventDefault();
	leftbox.style.background="White";
	leftbox.style.border="3px solid blue";
}

function droppedLeft(e){
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');
	rightbox.innerHTML = "";
	mypic = document.getElementById("colorpic");
	mypic.addEventListener("dragstart", startDrag, false);
	mypic.addEventListener("dragend", endDrag, false);
}

function droppedRight(e){
	e.preventDefault();
	rightbox.innerHTML = e.dataTransfer.getData('Text');
	leftbox.innerHTML = "";
	mypic = document.getElementById("colorpic");
	mypic.addEventListener("dragstart", startDrag, false);
	mypic.addEventListener("dragend", endDrag, false);
}

window.addEventListener("load", doFirst, false);