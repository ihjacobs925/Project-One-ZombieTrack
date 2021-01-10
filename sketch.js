let athlete;
let aImg;
let zImg;
let bImg;
let zombies = [];
let gameScore = 0;
let gameIntervalId;

const resetBtn = document.getElementById('reset');
const scoreDiv = document.getElementById('gameScore');

function preload() {
   aImg = loadImage('athlete.png');
   zImg = loadImage('zombie.png');
   bImg = loadImage('track.jpg');
}


function updateScore () {
  gameScore++;
  scoreDiv.innerText = 'Score: ' + gameScore; 
}

async function setup() {
  noCanvas();
  zombies = [];
  let canvas = await createCanvas(800, 450);
  gameScore = 0;
  console.log('show score');
  athlete = new Athlete();
  gameIntervalId = setInterval(updateScore, 500);
}

resetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  setup();
})


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
      alert(`You have been eaten! Game Over! High Score: ${gameScore}`);
      clearInterval(gameIntervalId);
      noLoop();
   }
  }

  athlete.show();
  athlete.move();

}

