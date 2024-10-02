import Phaser from "phaser";
import Preloader from "./states/Preload";
import Menu from "./states/Menu";
import Game from "./states/Game";
import GameOver from "./states/GameOver"

let config = {
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [Preloader,Menu,Game,GameOver],
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default : 'arcade'
    }
};
new Phaser.Game(config);