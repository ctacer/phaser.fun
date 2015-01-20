
class Core {
  constructor() {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update, render: this.render });		
  }
  preload() {}
  create() {}
  update() {}
  render() {
    this.game.debug.inputInfo(32, 32);
  }
  get Game() {
    return this.game;
  }
}

class Ship {
  constructor() {
    this.batteryPower = 100;
    this.protectShields = 100;
  }
}

class BattleShip extends Ship {
  constructor() {
    super();
  }

}

new Core();