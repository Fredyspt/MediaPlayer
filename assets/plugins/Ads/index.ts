import MediaPlayer from '../../MediaPlayer'
import Ads, { Ad } from './Ads';

class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    
    constructor() {
        this.ads = Ads.getInstance();

        // media sera el que llame a este metodo, por lo que this dejara 
        // de ser AdsPlugin, por eso hay que hacer bind
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);

        // Renderiza ad cada 30 seg.
        if(currentTime % 30 === 0) {
            this.renderAd();
        }
    }

    private renderAd() {
        if(this.currentAd){
            return;
        }

        const ad = this.ads.getAd();
        this.currentAd = ad;
        console.log(this.currentAd);
    }
}

export default AdsPlugin;