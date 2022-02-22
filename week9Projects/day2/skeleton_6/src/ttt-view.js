class View {
  constructor(game, el) {
    this.game = game;
    this.grid = el;
    this.setupBoard();
  }

  setupBoard() {  
    const list = document.createElement("ul")
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
    grid.nodeName === "LI"
  }

  makeMove(square) {
    const location = JSON.parse(grid.dataset.location)
    const player = this.game.currentPlayer
    try {
      this.game.playMove(location)
    }
    catch(square){
      alert(square.msg)
    }
    square.classList.add(player);
  }

}

module.exports = View;
