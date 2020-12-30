let athlete;
function setup() {
    createCanvas(600, 450);
    athlete = new Athlete();
}

function keyPressed() {
    if (key == ' ') {
        athlete.jump();
    }
}

function draw() {
    background(220);
    athlete.show();
    athlete.move();
}