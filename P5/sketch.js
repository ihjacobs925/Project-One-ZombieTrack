let unicorn;
let trains = [];


function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();
}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump();
  }
}

function draw() {
  if (random(1) < .01) {
    trains.push(new Train());
  }


  background(220);
  unicorn.show();
  unicorn.move();

  for (let t of trains) {
    t.move();
    t.show();
  }
}
