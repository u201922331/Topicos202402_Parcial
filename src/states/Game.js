import Phaser from "phaser";

class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'Game' });
        this.bg = null;
        this.floor = null;
        this.monster = null;
        this.candyGroup = null;
        this.textScore = null;
        this.textLives = null;
        this.fontStyle = null;
    }

    create() {
        this.timeCreated = 0;
        this.score = 0;
        this.lives = 3;

        this.physics.world.gravity.y = 200;

        this.bg = this.add.sprite(0, 0, 'background').setOrigin(0, 0);

        this.floor = this.add.sprite(0, 0, 'floor').setOrigin(0, 0);
        this.floor.y = this.game.config.height - this.floor.height;

        this.monster = this.add.sprite(0, this.floor.y, 'monster-idle');
        this.candyGroup = this.physics.add.group();

        this.fontStyle = { font: '40px Arial', fill: '#FFCC00', stroke: '#333', strokeThickness: 5 };
        this.textScore = this.add.text(0, 0, this.score, this.fontStyle);
        this.textLives = this.add.text(0, this.textScore.height, this.lives, this.fontStyle);
    }

    update(time, delta) {
        if (this.lives <= 0 || this.score >= 5) {
            this.scene.start('GameOver');
        }

        this.timeCreated += delta;
        if (this.timeCreated > 1000) {
            this.timeCreated = 0;

            let candy = this.physics.add.sprite(
                Phaser.Math.Between(82 / 2, this.game.config.width - (82 / 2)), 
                0, 
                'candy'
            ).setInteractive();
            candy.setFrame(Phaser.Math.Between(0, 4));
            candy.setOrigin(0.5, 0.5);
            candy.rotateMe = (Math.random() * 4) - 2;
            this.candyGroup.add(candy);
            this.physics.add.overlap(this.monster, candy, () => this.getHit(), null, this);
            candy.on('pointerdown', () => this.destroy(candy));
        }

        this.input.on('pointermove', function (pointer) {
            this.tweens.add({
                targets:this.monster,
                x: pointer.x,
                duration: 1000
            }, this);
        }, this);
    }

    destroy(candy) {
        this.score++;
        this.textScore.setText('' + this.score);
        candy.destroy();
    }

    getHit() {
        this.lives--;
        this.textScore.setText('' + this.lives);
    }
}

export default Game;