import Phaser from "phaser";

class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
        this.bg = null;
        this.title = null;
        this.btnStart = null;
        this.cover = null;
    }

    create() {
        this.bg = this.add.sprite(0, 0, 'background').setOrigin(0, 0);
        this.title = this.add.sprite(0, 0, 'title').setOrigin(0, 0);
        this.cover = this.add.sprite(0, 0, 'monster-cover').setOrigin(0, 0);
        this.cover.y = this.game.config.height - this.cover.height;
        this.btnStart = this.add.sprite(0,0, 'button-start')
            .setInteractive()
            .on('pointerdown', function(pointer) { this.startGame(); }, this)
            .setOrigin(0, 0);
        this.btnStart.x = this.game.config.width - this.btnStart.width;
        this.btnStart.y = this.game.config.height - this.btnStart.height;
    }

    startGame() {
        this.scene.start('Game');
    }
}

export default Menu;