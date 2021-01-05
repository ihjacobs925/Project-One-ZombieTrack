let athlete;
let zombies = [];


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
  if (random(1) < .01) {
    zombies.push(new Zombie());
  }


  background(220);
  athlete.show();
  athlete.move();

  for (let z of zombies) {
    z.move();
    z.show();
  }
}
