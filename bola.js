const bola = {
    x: 300,
    y: 300,
    vx: 5,
    vy: -4,
    size: 20,

    display() {
        ellipse(this.x, this.y, this.size)
    },

    move() {
        this.x += this.vx;
        this.y += this.vy;
    },

    bounce() {
        if (this.x < this.size / 2 || this.x > width - this.size / 2) {
            this.vx = -this.vx;
        }
        if (this.y < this.size / 2 || this.y > height - this.size / 2) {
            this.vy = -this.vy;
        }
    }
}