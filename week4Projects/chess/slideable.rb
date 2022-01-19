module Slideable
    HORIZONTAL_DIRS = []
    DIAGNOL_DIRS = []

    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    def diagnol_dirs 
        DIAGNOL_DIRS
    end

    def moves 
    end

    def horizontal_moves 
        horizontals = [] 
        @board.rows.each_with_index do |row, i1|
            row.each_with_index do |spot, i2|
                if spot.nil?
                    horizontals << [i1, i2]
                end
            end
        end
        horizontals 
    end 

    def diagonal_moves(start_pos)
        curr_pos = start_pos
        diagonals = [] 

      (curr_pos[1]...@board.rows.length).each do |i|
        (curr_pos[0]...@board.rows.length).each do |j|
          if @board.rows[j][i] == nil 
            diagonals << [i, j]
          end
        end
      end
      diagonals 
    end

    def vertical_moves(start_pos)
        verticals = [] 
        curr_spot = start_pos 
       @board.rows.transpose.each_with_index do |col, i|
            if col[curr_spot].nil? 
                verticals << [i, curr_spot]
            end
       end
        verticals 
    end
end 
