require_relative 'piece.rb'
require_relative 'slideable.rb'

class Bishop < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
        @color
    end

    def move_dirs
      curr_pos = @pos
      moves = [] 

      (curr_pos[1]...@board.rows.length).each do |i|
        (curr_pos[0]...@board.rows.length).each do |j|
          if @board.rows[j][i] == nil 
            moves << [i, j]
          end
        end
      end
      moves 
    end
end