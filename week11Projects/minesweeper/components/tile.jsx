import React from 'react';
import * as MineSweeper from './minesweeper_2';

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.altKey) {
      this.props.updateGame(this.props.tile, true)
    } else {
      this.props.updateGame(this.props.tile, false)
    }
  }

  render() {
    const tile = this.props.tile
    if (tile.bombed) {
      return(
        <div className="tile" onClick={this.handleClick}>
          b
        </div>
      )
    } else if (tile.flagged) {
      return(
        <div className="tile" onClick={this.handleClick}>
          f
        </div>
      )
    } else if (tile.explored) {
      const num = tile.adjacentBombCount()
      if (num > 1) {
         return(
        <div className="tile" onClick={this.handleClick}>
          {num}
        </div>
      )} else {
        return(
        <div className="tile" onClick={this.handleClick}>
          1
        </div>
      )
      }
    } else {
      return(
        <div className="tile" onClick={this.handleClick}>
        </div>
      )
    }
  }
}

export default Tile;