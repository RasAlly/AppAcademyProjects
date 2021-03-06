import * as MineSweeper from './minesweeper_2';
import React from 'react';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    const newBoard = new MineSweeper.Board(9, 10);
    this.state = { board: newBoard }; 
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board })
  }

  render() {
    const board = this.state.board;
    if (board.won()) {
      return (
        <div>
        <div className="board">
          <Board board={this.state.board} updateGame={this.updateGame}/>
        </div>


        <div className="modal-content">
          <p>You Win!</p>
          <button onClick={this.restartGame}>Restart Game</button>
        </div>
      </div>
      )
    } else if (board.lost()) {
      return (
        <div>
          <div className="board">
            <Board board={this.state.board} updateGame={this.updateGame}/>
          </div>


          <div className="modal-content">
            <p>You Lose!</p>
            <button onClick={this.restartGame}>Restart Game</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="board">
          <Board board={this.state.board} updateGame={this.updateGame}/>
        </div>
      )
    }
  }

  restartGame() {

    const newBoard = new MineSweeper.Board(9, 10);
    this.setState({ board: newBoard }) 
  }
}

export default Game;