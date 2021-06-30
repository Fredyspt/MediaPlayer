class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.element;
        // Establece un array vacio como valor inicial
        this.plugins = config.plugins || [];

        this.initPlugins();
    }

    private initPlugins() {
        this.plugins.forEach((plugin) => {
            plugin.run(this);
        });
    }

    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }

    toggleMute() {
        this.media.muted ? this.unmute() : this.mute();
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }
}

export default MediaPlayer;
