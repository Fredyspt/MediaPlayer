import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads';

const video = document.querySelector("video");
const player = new MediaPlayer({
    element: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const button: HTMLElement = document.querySelector("button");
button.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.getElementById("mute")
muteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}