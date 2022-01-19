class Piece
    attr_accessor :color, :pos
    
    def initialize(color, board, pos)
        @color = color 
        @board = board 
        @pos = pos 
    end

    def to_s 
        @color.to_s
    end

    def empty?
        @board.rows.all?{|row| row.all?{|piece| piece == NullPiece.instance}}
    end 

    def valid_moves
        return true if @board.rows[@pos].empty?
        false 
    end

    def pos=(val)
        @board.rows[@pos] = val 
    end

end