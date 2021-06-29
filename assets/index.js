import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.ts'

const video = document.querySelector("video");
const button = document.querySelector("button");
const muteButton = document.getElementById("mute")
const player = new MediaPlayer({
    element: video, 
    plugins: [new AutoPlay(), new AutoPause()],
});

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}