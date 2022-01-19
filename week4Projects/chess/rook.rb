require_relative 'piece.rb'
require_relative 'slideable.rb'

class Rook < Piece
    include Slideable

    def initialize(color, board, pos)
        super
    end

    def symbol
        @color
    end

    def move_dirs
        moves = []

        @board.rows.each_with_index do |row, i1|
            row.each_with_index do |spot, i2|
                if spot.nil?
                    moves << [i1, i2]
                end
            end
        end
       
        curr_spot = @pos[1]
       @board.rows.transpose.each_with_index do |col, i|
            if col[curr_spot].nil? 
                moves << [i, curr_spot]
            end
       end
        moves
    end
end