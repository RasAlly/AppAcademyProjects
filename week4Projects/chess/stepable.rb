module Stepable 
 
  def moves(start_pos, positions) 
    possibles = []

    positions.each do |pos|
      first = pos[0] + start_pos[0]
      last = pos[1] + start_pos[1]
      possibles << [first, last]
    end
    possibles
  end 

  # def move_diffs(start_pos) ###not sure what this is supposed to do

  # end 

end