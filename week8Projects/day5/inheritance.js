Function.prototype.inherits = function(method) {

  function Surrogate() {}
  Surrogate.prototype = method.prototype
  this.prototype = new Surrogate()
  this.prototype.constructor = this
  
}


// function MovingObject () {}

// function Ship () {}
// Ship.inherits(MovingObject);

// function Asteroid () {}
// Asteroid.inherits(MovingObject);