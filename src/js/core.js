
!function () {

  class Application {

    constructor() {    
      this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update, render: this.render });
    }

    preload() {
      this.game.load.image('ship', 'resources/player.png');
    }

    create() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 100;

      let ship = this.game.add.sprite(200, 200, 'ship');
      this.game.physics.enable(ship, Phaser.Physics.ARCADE);
      ship.anchor.setTo(0.5, 0.5);
      ship.body.velocity.x = 40;
      ship.body.bounce.set(0.9);

      this.ship = ship;
      this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    update() {
      if (this.jumpButton.isDown && this.game.time.now > this.jumpTimer)
      {
          this.ship.body.velocity.y = -150;
          this.jumpTimer = this.game.time.now + 750;
      }
    }

    render() {
      this.game.debug.inputInfo(32, 32);
    }

  }

  new Application();

} ();