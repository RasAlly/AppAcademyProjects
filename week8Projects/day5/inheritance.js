Function.prototype.inherits = function(method) {

  // function Surrogate() {};
  // Surrogate.prototype = method.prototype
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;

  this.prototype = Object.create(method.prototype)
  this.prototype.constructor = this;
  
}


function MovingObject () {};

MovingObject.prototype.isMoving = function() {
  console.log("it's movingg")
}

function Ship () {};
Ship.inherits(MovingObject);


function Asteroid () {};
Asteroid.inherits(MovingObject); 