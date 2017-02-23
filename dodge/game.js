var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;


function setup() {
    isGameOver = false;
    createCanvas(256, 256);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width / 2, 0, 0, 0);
    enemy.rotationSpeed = 4.0;
}    

function draw() {
    if (isGameOver) {
    gameOver();
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    if (enemy.overlap(player)) {
      gameOver();
    }
    background(0, 0, 100);
    if (keyDown(RIGHT_ARROW) && player.position.x < ((width / 2))) {
      player.position.x += 2;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (width / 2)) {
      player.position.x -= 2;
    }
    enemy.position.y = enemy.position.y + 3;
    if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
     }
     drawSprites();
    }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
}

function mouseClicked() {
  isGameOver = false;
  player.position.x = width / 2;
  player.position.y = height - (height / 2);
  enemy.position.x = width / 2;
  enemy.position.y = 0;
}