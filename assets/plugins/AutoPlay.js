class AutoPlay{
    run(player){
        if(!player.muted){
            // Setters no se pueden llamar como una funcion, se les tiene
            // que asignar el valor como una variable.
            player.mutePlayer = true;
        }
        player.play();
    }
}

export default AutoPlay;