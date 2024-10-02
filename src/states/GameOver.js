import Phaser from "phaser";

class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
        this.bg = null;
        this.title = null;
        this.btnMenu = null;
        this.coverGO = null;
    }

    create() {
        this.bg = this.add.sprite(0, 0, 'background').setOrigin(0, 0);
        this.title = this.add.sprite(0, 0, 'title').setOrigin(0, 0);
        this.coverGO = this.add.sprite(0, 0, 'gameover').setOrigin(0, 0);
        this.coverGO.y = this.game.config.height - this.coverGO.height;
        this.btnMenu = this.add.sprite(0,0, 'button-pause')
            .setInteractive()
            .on('pointerdown', function(pointer) { this.backToMenu(); }, this)
            .setOrigin(0, 0);
        this.btnMenu.x = this.game.config.width - this.btnMenu.width;
        this.btnMenu.y = this.game.config.height - this.btnMenu.height;
    }

    backToMenu() {
        this.scene.start('Menu');
    }
}

export default GameOver;