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
        return collideRectRect(this.x, this.y, this.r, this.r, zombie.x, zombie.y, zombie.r, zombie.r);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r)
    }

    show() {
        rect(this.x, this.y, this.r, this.r);
        //image(aImg, ...)
    }
}