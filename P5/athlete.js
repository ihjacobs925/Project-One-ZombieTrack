class Athlete {
    constructor() {
        this.r = 100;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 3;
    }

    jump() {
        if (this.y == height - this.r) {
            this.vy = -35;
        }
    }

    hits(zombie) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = zombie.x + zombie.r * 0.5;
        let y2 = zombie.y + zombie.r * 0.5;

        return collideCircleCircle(x1, y1, this.r, x2, y2, zombie.r);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r)
    }

    show() {
        ellipseMode(CORNER);
        image(aImg, this.x, this.y, this.r, this.r);
        //image(aImg, ...)
    }
}