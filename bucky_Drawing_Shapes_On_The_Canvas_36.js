function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	canvas.strokeRect(10, 10, 100, 200); // start at x = 10 and y =10 and width 100 and height 200
	canvas.fillRect(120, 10, 100, 200); // start at x = 10 and y =10 and width 100 and height 200
	canvas.clearRect(140, 20, 50, 90); // substract pixels from what ever it overlays
}

window.addEventListener('load', doFirst, false);










