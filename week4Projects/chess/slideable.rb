module Slideable
    HORIZONTAL_DIRS = [[0,1], [0, -1]].freeze 
    VERTICAL_DIRS = [[1,0], [-1, 0]].freeze 
    DIAGNOL_DIRS = [[1, 1], [1, -1], [-1, 1], [-1, -1]].freeze 

    def horizontal_dirs
        HORIZONTAL_DIRS
    end
    
    def vertical_dirs
        VERTICAL_DIRS
    end

    def diagnol_dirs 
        DIAGNOL_DIRS
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

    # this helper method is only responsible for collecting all moves in a given direction
    # the given direction is represented by two args, the combination of a dx and dy
    def grow_unblocked_moves_in_dir(dx, dy)
        # create an array to collect moves

        arr = [] 
        row, col = self.pos
        
        while true 
            
            row += dx
            col += dy
            new_position = [row, col]
            if valid_position?(self.pos)
                arr << new_position
            elsif self.board.rows[pos[0]][pos[1]].color != self.board.rows[new_position[0]][new_position[1]].color
                arr << new_position
                break
            else
                break
            end
        end
        arr 
    end

    def valid_position?(pos)
        return false if self.board.rows[pos[0]][pos[1]].empty?
        return false if pos[0] > 7 || pos[1] > 7 
    end
end 
