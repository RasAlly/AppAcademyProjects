const View = require('./ttt-view.js');
const Game = require('/ttt_node/game.js');

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();
  const container = document.querySelector('.ttt');
  window.View = new View(game, container);
});
