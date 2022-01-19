class Board

    attr_reader :rows 
    def initialize
        @null_piece = NullPiece.instance
        @rows = Array.new(8){Array.new(8, @null_piece)}
    end

    def [](pos)
      @rows[pos[0]][pos[1]]  
    end

    def []=(pos, val)
        @rows[pos[0]][pos[1]] = val
    end

    def move_piece(start_pos, end_pos)
        raise 'there is no piece' if self[start_pos].nil?
        if self[end_pos] == @null_piece
            self[end_pos] = self[start_pos]
            self[start_pos] = @null_piece
        else
            raise 'You cannot move there'
        end
    end

    protected
    attr_reader :null_piece
end