function MovingObject(obj) {
  this.pos = obj['pos'];
  this.vel = obj['vel'];
  this.radius = obj['radius'];
  this.color = obj['color'];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
}


module.exports = MovingObject;