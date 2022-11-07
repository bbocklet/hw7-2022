
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false
	video.loop = false
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play()
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	video.playbackRate *= 0.90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	video.playbackRate *= 1.10
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead")
	video.currentTime += 10
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Current location is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false) {
		video.muted = true
		console.log("Video muted")
		this.innerHTML = "Unmute"
	}
	else if(video.muted == true) {
		video.muted = false
		console.log("Video unmuted")
		this.innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {

	console.log("Change Volume") 
	video.volume = this.value / 100

	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"


});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School")
	video.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original")
	video.classList.remove("oldSchool")
	
});