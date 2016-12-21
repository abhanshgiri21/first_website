function doFirst(){
	barsize=600;
	myMovie=document.getElementById('myMovie');
	playbutton=document.getElementById('playbutton');
	bar=document.getElementById('defaultbar');
	progressbar=document.getElementById('progressbar');

	playbutton.addEventListener('click',playOrPause,false);
	playbutton.addEventListener('click',clickedBar,false);

}
 function playOrPause(){
 	if(!myMovie.paused && !myMovie.ended){
 		myMovie.pause();
 		playbutton.innerHTML='Play';
 		window.clearInterval(updateBar);

 	}else{
 		myMovie.play();
 		playbutton.innerHTML='Pause';
 		updateBar=setInterval(update, 500);
 	}
 }

function update(){
	if(!myMovie.ended){
		var size=parseInt(myMovie.currentTime*barsize/myMovie.duration);
		progressbar.style.width=size+'px';
	}else{
		progressbar.style.width='0px';
		playbutton.innerHTML='Play';
		window.clearInterval(updateBar);

	}
}
function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended){
		var mouseX=e.pageX-bar.offsetLeft;
		var newtime= mouseX*myMovie.duration/barsize;
		myMovie.currentTime=newtime;
		progressbar.style.width=mouseX+'px';

	}
}
window.addEventListener('load', doFirst,false);