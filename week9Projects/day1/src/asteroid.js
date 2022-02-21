const MovingObject = require("./moving_object")
const Util = require("./util")


function Asteroid(options) {
    options.pos = options.pos
    options.color = 'blue'
    options.radius = 30
    options.vel = [10, 10]
    MovingObject.call(this, options)
}

Util.inherits(Asteroid, MovingObject)


// new MovingObject

module.exports = Asteroid;