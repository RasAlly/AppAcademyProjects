class Piece
    attr_accessor :color 
    
    def initialize(color, board, pos)
        @color = color 
        @board = board 
        @pos = pos 
    end

    def to_s 
        @color.to_s
    end

    def empty?
        @board.rows.all?{|row| row.all?{|piece| piece == nil}}
    end 

    def valid_moves
        return true if @board.rows[@pos] == nil 
        false 
    end

    def pos=(val)
        @board.rows[@pos] = val 
    end

end