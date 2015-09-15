function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	/*
	canvas.font="bold 22px Tahoma";
	canvas.textAlign ="start";

	canvas.save(); //save the current settings up to this point
	canvas.fillText("let's begin!", 10, 30);
	
	canvas.rotate(1); //rotate canvas by 1 radian
	canvas.fillText("after rotation",60,10);
	
	canvas.restore(); //restore canvas settings up to save point
	canvas.fillText("after restoring!",10,30);
	*/
	
	var pic = new Image();
	pic.src="green.png";
	pic.addEventListener("load", function(){canvas.drawImage(pic,0,0,100,300)},false); //need to wait for image to load before drawing image on canvas
	
}
window.addEventListener("load", doFirst, false);