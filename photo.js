let Photo = document.getElementById("img");
let next = document.getElementById("next");
let prev = document.getElementById("previous");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let volumeup = document.getElementById("volumeup");
let volumedown = document.getElementById("volumedown");

let images = ["moon1", "moon2", "moon3", "moon4", "moon5"];
let songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3"];  
let i = 0;

let audio = new Audio(songs[i] + ".mp3");  
audio.loop = true;
audio.volume = 0.5; 
audio.play();
function updateMedia(index) {
  Photo.src = images[index] + ".jpg";  
  audio.pause();  
  audio = new Audio(songs[index] + ".mp3");  
  audio.loop = true;
  audio.volume = 0.5; 
  audio.play();   
}
play.addEventListener("click", () => {
  updateMedia(i); 
  audio.play();
});
pause.addEventListener("click", () => {
  audio.pause();  
});
next.addEventListener("click", () => {
  if (i < images.length - 1) {
    i++;
  } else {
    
    i = 0;  
  updateMedia(i);
  }
});

prev.addEventListener("click", () => {
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;  
  }
  updateMedia(i);
});
volumeup.addEventListener("click", () => {
  if (audio.volume < 1) {
    audio.volume = Math.min(1, audio.volume + 0.1);  
  }
  audio.play();
});
volumedown.addEventListener("click", () => {
  if (audio.volume > 0) {
    audio.volume = Math.max(0, audio.volume - 0.1);  
  }
  audio.play();
});
