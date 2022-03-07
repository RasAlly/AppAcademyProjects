import React from 'react';
import Tile from './tile'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.renderTiles = this.renderTiles.bind(this)
    this.renderRows = this.renderRows.bind(this)
  }
  
  render() {
    
    return (
      <div className="row">
        {
          this.renderRows()
        }
      </div>
    )
  }

  renderRows() {
    let grid = this.props.board.grid;
    return grid.map((row, idx) => {
      return (
        <div key={idx}> {this.renderTiles(row, idx)} </div>
      )
    })
  }

  renderTiles(row, idx) {
    return row.map((tile, j) => {
      return (
        <Tile key={idx * this.props.board.grid.length + j} updateGame={this.props.updateGame} tile={tile}/>
      )
    })
  }
}

export default Board;