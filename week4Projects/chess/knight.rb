require_relative 'piece'
require_relative 'stepable'

class Knight < Piece
  include Stepable 

  def symbol
    '♞'.colorize(color)
  end

  def move_diffs # Different moves a knight can do 
    # Move calls this 
   positions = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]]
    moves(@pos, positions)
  end
end