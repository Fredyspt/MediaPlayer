class MediaPlayer {
    constructor(config){
      this.media = config.element;
    }
  
    play(){
      this.media.play();
    }
  
    pause(){
        this.media.pause();
    }
  }

  export default MediaPlayer;