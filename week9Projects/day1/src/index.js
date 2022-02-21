const Asteroid = require('./asteroid.js')
const MovingObject = require("./moving_object.js");

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});
  

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("game-canvas");
  
    const ctx = canvasEl.getContext("2d");

    window.ctx = ctx;

    // mo.draw(ctx)
    window.MovingObject = MovingObject;

    window.Asteroid = Asteroid;

});
