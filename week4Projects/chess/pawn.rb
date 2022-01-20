require_relative 'piece'
class Pawn < Piece

    def symbol
        '♙'.colorize(color)
    end

    def moves

    end

    private
    def at_start_row
        self.pos[0] == 1 || self.pos[0] == 6
    end

    def forward_dir
        mid = 4

        if self.pos[0] < mid 
            return 1
        else
            return -1
        end
    end

    def forward_steps
       if at_start_row && self.forward_dir == 1
            return self.pos[0] + 2 
       elsif at_start_row && self.forward_dir < 1
            return self.pos[0] - 2
       elsif !at_start_row && self.forward_dir == 1 
            return self.pos[0] + 1
       else
        self.pos[0] - 1 
       end  
    end

    def side_attacks
       dirs = [1, 1], [1, -1], [-1, 1], [-1, -1]]
        poss_attacks = []

        dirs.each do |dir|
            pos1 = self.pos[0]
            pos2 = self.pos[1]
            spot = self[dir[0] + pos1][dir[1] + pos2]
            if !spot.empty? && spot.color != self.color
                poss_attacks << spot
            end
        end
        poss_attacks
    end
end