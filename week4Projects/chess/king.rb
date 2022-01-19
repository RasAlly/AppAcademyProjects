require_relative 'piece'
require_relative 'stepable'

class King
  include Stepable 

  def initialize(color, board, pos)
    super 
  end

  def symbol
    @color
  end

  def move_diffs 
  end 

end