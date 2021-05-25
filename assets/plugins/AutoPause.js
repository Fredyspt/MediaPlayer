class AutoPause {
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            // que porciento del elemento tiene que tener interseccion
            // con el contenedor
            threshold: this.threshold
        })

        // comienza a observer el video
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    // recibe una lista de entries, todos los objetos que observamos
    handleIntersection(entries) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold

        isVisible ? this.player.play() : this.player.pause()
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        isVisible ? this.player.play() : this.player.pause()
    }
}

export default AutoPause;