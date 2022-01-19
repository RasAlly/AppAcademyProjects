require_relative 'piece.rb'
require_relative 'slideable.rb'

class Queen < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
        @color
    end

    def move_dirs
    end
end