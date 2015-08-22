'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var ship;
var space;
var cursors;
var enemy;
var missle;
var death;

function preload() {
  game.stage.backgroundColor = '#66FFFF';
  game.load.image('space', 'space.gif');
  game.load.image('ship', 'ship.gif');
  game.load.image('missle','missle.gif');
  game.load.image('enemy', 'enemy.gif');
  game.load.image('death', 'death.png');
}

function create() {
  space = game.add.tileSprite(0,0,800,600,'space');
  space.autoScroll(-300,1);
  missle = game.add.sprite(25,300,'missle');
  ship = game.add.sprite(20,300,'ship');
  enemy = game.add.sprite(600,300,'enemy');
  game.physics.enable(ship, Phaser.Physics.ARCADE);
  game.physics.enable(missle, Phaser.Physics.ARCADE);
  game.physics.enable(enemy, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  game.physics.arcade.overlap(missle, enemy, collisionHandler, null, this);
  game.physics.arcade.overlap(ship, enemy, collisionHandler2, null, this);

  ship.body.velocity.x = 0;
  ship.body.velocity.y = 0;


  if (! missle.shooting) {
    missle.body.velocity.x = 0;
    missle.body.velocity.y = 0;
    missle.x = ship.x + 10;
    missle.y = ship.y + 1;
    missle.renderable = true;
  }

  if (missle.x > 820) {
    missleReset();
  }


  if (cursors.up.isDown) {
    ship.body.velocity.y = -300;
    if (! missle.shooting) {
      missle.body.velocity.y = -300;
    }
  }

  else if (cursors.down.isDown) {
    ship.body.velocity.y = 300;
    if (! missle.shooting) {
      missle.body.velocity.y = 300;
    }
  }

  if (cursors.left.isDown) {
    ship.body.velocity.x = -300;
    if (! missle.shooting) {
      missle.body.velocity.x = -300;
    }
  }

  if (cursors.right.isDown) {
    ship.body.velocity.x = 300;
    if (! missle.shooting) {
      missle.body.velocity.x = 300;
    }
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    missle.body.velocity.x = 1000;
    missle.shooting = true;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
    ship.body.velocity.y = -300;
    if (! missle.shooting) {
      missle.body.velocity.y = -300;
    }
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
    ship.body.velocity.y = 300;
    if (! missle.shooting) {
      missle.body.velocity.y = 300;
    }
  }
  

  if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
    ship.body.velocity.x = -300;
    if (! missle.shooting) {
      missle.body.velocity.x = -300;
    } 
  }
  

  if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
    ship.body.velocity.x = 300;
    if (! missle.shooting) {
      missle.body.velocity.x = 300;
    }
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.J)) {
    console.log("You are not allowed to see this. Why would you even press the letter J? What random thought occoured in your head to press the letter 'J'? like wow! I wrote this whole line of code just to ask you this question. PLEASE DO NOT PRESS THE LETTER 'O'!")
  }
  
  if (game.input.keyboard.isDown(Phaser.Keyboard.O)) {
    console.log("You asked for this. Go here. http://www.theworldsworstwebsiteever.com/")
  }
}

function render() {
}

function collisionHandler(missle, enemy) {
  missleReset();
  repositionEnemy();
}

function collisionHandler2(ship, enemy) {
  missle.kill();
  enemy.kill();
  ship.kill();
  death = game.add.sprite(300,300,'death');
}


function missleReset() {
  missle.shooting = false;
  missle.body.velocity.x = 0;
  missle.body.velocity.y = 0;
}

function repositionEnemy() {
  enemy.x = game.rnd.integerInRange(100, 780);
  enemy.y = game.rnd.integerInRange(20, 540);
}
