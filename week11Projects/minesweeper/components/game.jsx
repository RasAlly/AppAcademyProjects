import * as MineSweeper from './minesweeper_2';
import React from 'react';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    const newBoard = new MineSweeper.Board(9, 10);
    this.state = { board: newBoard }; 
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {

    return (
      <div className="board">
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}

export default Game;