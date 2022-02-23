const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = game;
    this.grid = el;
    this.handleClick = this.handleClick.bind(this);
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {  
    const list = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let square = document.createElement("li");
        square.dataset.location = JSON.stringify([i, j]),
        list.append(square);
      }
    }
    this.grid.append(list)
  }
  
  bindEvents() {
    this.grid.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    const grid = e.target
    "LI" === grid.nodeName && this.makeMove(grid);
  }

  makeMove(square) {
    const location = JSON.parse(square.dataset.location);
    const player = this.game.currentPlayer;
    try {
      this.game.playMove(location)
    }
    catch(square){
      alert(square.msg)
    }
    square.classList.add(player);
    if (this.game.isOver()) {
      if (this.game.winner() === null) {
        alert(`It's a tie!`)
      } else {
        const marks = document.querySelectorAll(`.${player}`)
        marks.forEach(ele => {
          ele.classList.add(player+"-winner")
        })
        alert(`${player} has won!`);
      }
      this.grid.removeEventListener("click", this.handleClick)
    };
  }

}

module.exports = View;
