import MediaPlayer from "../MediaPlayer";

class AutoPlay{
    constructor() {}
    run(player: MediaPlayer){
        if(!player.media.muted){
            // Setters no se pueden llamar como una funcion, se les tiene
            // que asignar el valor como una variable.
            player.media.muted = true;
        }
        player.play();
    }
}

export default AutoPlay;