import 'phaser'; // 将phaser注入当前作用域环境

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    // 生命周期
    preload: preload,
    create: create,
    update: update
  },
  physics: { // 使用物理系统
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
};

const game = new Phaser.Game(config);
var player;
var platforms;
var cursors;
function preload() {
  this.load.spritesheet('dude', '/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create() {

  player = this.physics.add.sprite(100, 450, 'dude');
  platforms = this.physics.add.staticGroup();
  cursors = this.input.keyboard.createCursorKeys();

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  // 动画对所有的Game Object 有效
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });
  

  this.physics.add.collider(player, platforms);
}

// ticker函数封装，能否控制帧率？
function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-120);

    player.anims.play('left', true);
  }
  else if (cursors.right.isDown) {
    player.setVelocityX(160);

    player.anims.play('right', true);
  } else if (cursors.up.isDown) {
    player.setVelocityY(-160);
    player.anims.play('turn');
  }
  else {
    player.setVelocityX(0);

    player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}