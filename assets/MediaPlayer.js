class MediaPlayer {
    constructor(config){
      this.media = config.element;
      // Establece un array vacio como valor inicial
      this.plugins = config.plugins || [];

      this._initPlugins();
    }
  
    _initPlugins(){
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },

            set mutePlayer(value){
                if(value) {
                    this.media.muted = value;
                }
            }
        }

        this.plugins.forEach(plugin => {
            plugin.run(player);
        })
    }

    togglePlay(){
        this.media.paused ? this.play() : this.pause();
    }

    toggleMute(){
        this.media.muted ? this.unmute() : this.mute();
    }

    play(){
      this.media.play();
    }
  
    pause(){
        this.media.pause();
    }

    mute(){
        this.media.muted = true;
    }

    unmute(){
        this.media.muted = false;
    }
  }

  export default MediaPlayer;