const Asteroid = require("./asteroid");

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 20;

function Game() {
  this.asteroids = []
  this.addAsteroids();
}


Game.prototype.addAsteroids = function () {
  for (let i = 0; i <= 20; i++) {
    let a = new Asteroid(this.randomPosition())
    this.asteroids.push(a);
  }
}

Game.prototype.randomPosition = function () {
  let arr = []
  let min = 0;
  let max = 500;
  arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  return arr;
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  this.asteroids.forEach(a => {
    a.draw(ctx);
  })
}

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(a => {
    a.pos = [a.pos[0] + 1, a.pos[1] + 1]
  })
}


module.exports = Game;