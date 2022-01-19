require_relative 'piece.rb'
require_relative 'slideable.rb'

class Bishop < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
        return :B
    end

    def move_dirs
        diagonal_moves(pos[1])
    end
end