let PLAY = 1;
let END = 0;
let gameState = PLAY;
let score = 0;
let current_score;
let athlete;
let aImg;
let zImg;
let bImg;
let zombies = [];

function preload() {
   aImg = loadImage('athlete.png');
   zImg = loadImage('zombie.png');
   bImg = loadImage('track.jpg');
}


function setup() {
  createCanvas(800, 450);
  athlete = new Athlete();
}

function keyPressed() {
  if (key == ' ') {
    athlete.jump();
  }
}

function draw() {
  if (random(1) < .005) {
    zombies.push(new Zombie());
  }

  background(bImg); //bImg
  for (let z of zombies) {
    z.move();
    z.show();
    if (athlete.hits(z)) {
      alert('You have been eaten! Game Over!');
      noLoop();
   }
  }

  athlete.show();
  athlete.move();
}
