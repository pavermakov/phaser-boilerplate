import Phaser from 'phaser'

export default class extends Phaser.State {
  init() {
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bar');
    this.preloadBar.anchor.setTo(0.5);
  }

  preload() {
    // подгрузи ассеты для всей игры здесь

    this.load.setPreloadSprite(this.preloadBar);
  }

  create() {

  }

}
