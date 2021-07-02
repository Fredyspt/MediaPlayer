class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.element;
        // Establece un array vacio como valor inicial
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';

        // Obtiene el nodo padre de media, e inserta el contenedor antes de media
        this.media.parentNode.insertBefore(this.container, this.media);

        // Despues, mete a media dentro de container
        this.container.appendChild(this.media)
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
