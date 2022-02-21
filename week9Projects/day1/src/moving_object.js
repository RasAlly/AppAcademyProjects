function MovingObject(obj) {
  this.pos = obj['pos'];
  this.vel = obj['vel'];
  this.radius = obj['radius'];
  this.color = obj['color'];
}

MovingObect.prototype.draw = function(ctx) {
  document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("game-canvas");
  
    const ctx = canvasEl.getContext("2d");
  
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, 2*Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
  });
}

module.exports = MovingObject;