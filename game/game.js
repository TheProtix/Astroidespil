var ship;
var asteroids = [];
var lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  for (var i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
}
  
function draw() {
  background(0);
  for(var i = 0; i < asteroids.length; i++) {
    if(ship.hits(asteroids[i])){
      console.log('ups');
    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
  
  for(var i = lasers.length-1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    for(var j = asteroids.length-1; j >= 0; j--) {
      if(lasers[i].hits(asteroids[j])){
        if(asteroids[j].r > 13) {
          var newAsteroids = asteroids[j].breakup();
          asteroids = asteroids.concat(newAsteroids);
        } else {

        }
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        break;
      }
    }
  }

  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}

function keyReleased(){
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if(key == ' ') {
    lasers.push(new Laser(ship.pos, ship.heading));
  }
  if(keyCode == RIGHT_ARROW) {
    ship.setRotation(0.05);
  } else if(keyCode == LEFT_ARROW) {
    ship.setRotation(-0.05);
  } else if(keyCode == UP_ARROW) {
    ship.boosting(true);
  }
}
