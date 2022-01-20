require_relative 'nullpiece.rb'
require_relative 'king.rb'
require_relative 'queen.rb'
require_relative 'bishop.rb'
require_relative 'knight.rb'
require_relative 'pawn.rb'
require_relative 'rook.rb'
require 'colorize'

class Board

    attr_reader :rows 
    def initialize
        @null_piece = NullPiece.instance
        @rows = Array.new(8){Array.new(8, NullPiece.instance.symbol)}
    end

    def [](pos)
      @rows[pos[0]][pos[1]]  
    end

    def []=(pos, val)
        @rows[pos[0]][pos[1]] = val
    end

    def move_piece(start_pos, end_pos)
        p self[start_pos]
        raise 'there is no piece' if self[start_pos] == :_ 
        if self[end_pos] == :_
            self[end_pos] = self[start_pos]
            self[start_pos] = :_ 
        else
            raise 'You cannot move there'
        end
    end

    protected
    attr_reader :null_piece
end