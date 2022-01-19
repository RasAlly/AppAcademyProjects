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

  def move_diffs 
    @curr_pos = @pos 
  end
end