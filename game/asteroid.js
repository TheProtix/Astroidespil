function Asteroid() {
    this.pos = createVector(random(width), random(height));
    this.r = random(15, 50);
    this.total = floor(random(5, 15));
    this.offset = [];
    for(var i = 0; i < this.total; i++) {
        this.offset[i] = random(-15, 15);
    }

    this.render = function() {
        push();
        translate(this.pos.x, this.pos.y);
        //ellipse(0, 0, this.r * 2);

        beginShape();
        for(var i = 0; i < this.total; i++) {
            var angle = map(i, 0, this.total, 0, TWO_PI);
            var r = + this.r + this.offset[i];
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x, y)
        }
        endShape(CLOSE);
        pop();
    }
}