json.extract! @pokeman, :name, :attack, :defense

json.moves do 
    @pokeman.moves.each do |move|
        json.set! move.id do 
            json.extract! move, :name
        end
    end
end