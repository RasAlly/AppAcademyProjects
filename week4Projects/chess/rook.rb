require_relative 'piece.rb'
require_relative 'slideable.rb'

class Rook < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
       return :R
    end

    def move_dirs
        horizontal_dirs + vertical_dirs
    end
end