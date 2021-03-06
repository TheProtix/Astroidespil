function Laser(spos, angle) {
    this.pos = createVector(spos.x, spos.y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(5);

    this.update = function() {
        this.pos.add(this.vel);
    }
    this.render = function() {
        push();
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }

    this.hits = function(asteroid){
        var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        if(d < asteroid.r) {
            return true;
        } else {
            return false;
        }
    }
}