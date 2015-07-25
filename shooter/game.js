'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

function preload() {
  game.stage.backgroundColor = '#66FFFF';
  game.load.image('ship', 'ship.png');
}

var ship;
var cursors;

function create() {
  ship = game.add.sprite(20,300,'ship');
  game.physics.enable(ship, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  ship.body.velocity.x = 0;
  ship.body.velocity.y = 0;
  if (cursors.up.isDown) {
    ship.body.velocity.y = -1000;
  }
  else if (cursors.down.isDown) {
    ship.body.velocity.y = 1000;
  }
}

function render() {
}