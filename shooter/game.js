'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var ship;
var background;
var cursors;
//var enemy;
var missle;

function preload() {
  game.stage.backgroundColor = '#66FFFF';
  game.load.image('background', 'background.png');
  game.load.image('ship', 'ship.gif');
  game.load.image('missle','missle.gif');
  //game.load.image('enemy', 'enemy.gif');
}

function create() {
  background = game.add.tileSprite(0,0,800,600,'background');
  background.autoScroll(-300,1);
  missle = game.add.sprite(20,300,'missle');
  ship = game.add.sprite(20,300,'ship');
  //enemy = game.add.sprite(600,300,'enemy');
  game.physics.enable(ship, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  ship.body.velocity.x = 0;
  ship.body.velocity.y = 0;
  missle.x = ship.x;
  missle.y = ship.y;
  if (cursors.up.isDown) {
    ship.body.velocity.y = -1000;
  }
  else if (cursors.down.isDown) {
    ship.body.velocity.y = 1000;
  }
  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    console.log("yolo")
  }
}

function render() {
}
