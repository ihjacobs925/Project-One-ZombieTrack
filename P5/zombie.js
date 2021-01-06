class Zombie {
    constructor() {
        this.r = 85;
        this.x = width;
        this.y = height - this.r;
    }

    move() {
        this.x -= 16;
    }

    show() {
        ellipseMode(CORNER);
        image(zImg, this.x, this.y, this.r, this.r);
        //fill(255, 50)
        //rect(this.x, this.y, this.r, this.r)
        //image(zImg...)
    }
}