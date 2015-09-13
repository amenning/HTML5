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

/*	
	var g = canvas.createLinearGradient(0,0,100,100); // x start value, y start value, x stop value, y stop value 
	g.addColorStop(.0,"blue"); // where do you want to add this color (0-1), color
	g.addColorStop(0.5,"green");
	g.addColorStop(1,"red");
	canvas.fillStyle=g; //add fill gradient style to canvas
	canvas.fillRect(0,0,100,100);
*/

/*
	canvas.beginPath();
	canvas.moveTo(50,50); //starting x,y point
	canvas.lineTo(70,250); //next point x,y
	canvas.lineTo(300,200); //next x,y point
	canvas.closePath(); //draws line from last point to starting point
	canvas.stroke(); //convert path into shape
*/

/*
	canvas.shadowOffsetX = 4; //how much of an offset do you want for the shadow
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 6;
	canvas.shadowColor = 'rgba(0,0,255,0.5)'; //shadow has opacity of 0.5
	
	canvas.font="bold 36px Tahoma";
	canvas.textAlign="end"; //aligns text to ending point
	canvas.fillText("omgwtfbbq?", 300, 100); // filled in text vs .strokeText() which is hollow text letters
	canvas.strokeText("omgwtfbbq?", 300, 200);
*/

	canvas.font="bold 22px Tahoma";
	canvas.textAlign="start";
	canvas.fillText("start", 10, 30);
	
	canvas.translate(100,150);
	canvas.fillText("after translate", 0, 0);
	
	canvas.rotate(1); //rotate a value in radians
	canvas.fillText("after rotate", 0, 0);
	
	canvas.scale(1.5, 4); //stretch canvas by multiple for x and y
	canvas.fillText("after scale", 0 , 20);
	
}

window.addEventListener('load', doFirst, false);










