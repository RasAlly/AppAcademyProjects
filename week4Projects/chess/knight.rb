require_relative 'piece'
require_relative 'stepable'

class Knight 
  include Stepable 

  def initialize(color, board, pos)
    super 
  end

  def symbol
    @color
  end

  def move_diffs # Different moves a knight can do 
    # Move calls this 
    @curr_pos = @pos 
  end
end