function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
/*
	canvas.fillStyle="blue";
	canvas.strokeStyle="red";
	canvas.strokeRect(10, 10, 100, 200); // start at x = 10 and y =10 and width 100 and height 200
	canvas.fillRect(120, 10, 100, 200); // start at x = 10 and y =10 and width 100 and height 200
	canvas.clearRect(140, 20, 50, 90); // substract pixels from what ever it overlays
*/
	
	var g = canvas.createLinearGradient(0,0,100,100); // x start value, y start value, x stop value, y stop value 
	g.addColorStop(.0,"blue"); // where do you want to add this color (0-1), color
	g.addColorStop(0.5,"green");
	g.addColorStop(1,"red");
	canvas.fillStyle=g; //add fill gradient style to canvas
	canvas.fillRect(0,0,100,100);
	
}

window.addEventListener('load', doFirst, false);










