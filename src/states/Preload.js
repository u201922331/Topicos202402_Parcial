import Phaser from "phaser"

class Preloader extends Phaser.Scene {
    constructor() {
        super("Preloader");
    }

    preload() {
        
        this.load.image('background', '../assets/background.png');
        this.load.image('button-pause', '../assets/button-pause.png');
        this.load.spritesheet('button-start', '../assets/button-start.png', { frameWidth: 401, frameHeight: 143 });
        this.load.spritesheet('candy', '../assets/candy2.png', { frameWidth: 82, frameHeight: 98 });
        this.load.image('gameover', '../assets/gameover.png');
        this.load.image('monster-cover', '../assets/monster-cover.png');
        this.load.spritesheet('monster-idle', '../assets/monster-idle.png', { frameWidth: 103, frameHeight: 131 });
        this.load.spritesheet('monster-eats', '../assets/monster-eats.png', { frameWidth: 103, frameHeight: 131 });
        this.load.image('title', '../assets/title.png');
        this.load.image('score-bg', '../assets/score-bg.png');
        this.load.image('floor', '../assets/floor.png');
    }

    create() {
        this.scene.start('Menu');
    }
}
export default Preloader;