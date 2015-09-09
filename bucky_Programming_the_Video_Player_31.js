function doFirst(){
	barSize=600;
	myMovie=document.getElementById('myMovie');
	playButton=document.getElementById('playButton');
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');
	
	playButton.addEventListener('click', playOrPause, false);
	bar.addEventListener('click', clickedBar, false);
}