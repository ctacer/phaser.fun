
class Core {
  constructor() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

		function preload() {
		}

		function create() {
		}

		function update() {
    }

    function render() {
      game.debug.inputInfo(32, 32);
		}
		
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
