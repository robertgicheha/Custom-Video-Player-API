const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play and Pause video
function toggleVideoStatus (){
 if(video.paused){
   video.play();
 }else{
    video.pause();
 }
}
//update play and pause buttons
function updatePlayButton (){
    if (video.paused){
     play.innerHTML = ` <button class="btn" id="play">
     play
    </button>`
    }else{
        play.innerHTML = ` <button class="btn" id="play">
        pause
       </button>`
    }

}

//update timestamp and progress
function updateProgress (){
    // console.log(video.currentTime);
    // console.log(video.duration);
    progress.value = (video.currentTime / video.duration) * 100;

    //get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }
    //get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }
    //concatinate to timestamp
    timestamp.innerHTML = `${mins}: ${secs}`;


}

//set video time to progress
function setVideoProgress (){
  video.currentTime = (+progress.value * video.duration) / 100; 
}

//stop the video
function stopVideo (){
    video.currentTime= 0;
    video.pause();
}


//Event Listeners

video.addEventListener('click' , toggleVideoStatus);
video.addEventListener('play' , updatePlayButton);
video.addEventListener('pause' , updatePlayButton);
video.addEventListener('timeupdate' , updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click' , stopVideo);

progress.addEventListener ('change' , setVideoProgress);

