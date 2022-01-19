require_relative 'piece.rb'
require_relative 'slideable.rb'

class Queen < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
       return :Q 
    end

    def move_dirs
        horizontal_moves
        vertical_moves(pos[1])
        diagonal_moves(pos[1])
    end
end