class Game

    attr_accessor :rod1, :rod2, :rod3

    def initialize
        @rod1 = [1, 2, 3]
        @rod2 = []
        @rod3 = []
    end

    # def print
        
    # end

    def which_start
        current_rod = rod1
        
        p "select a rod: 1, 2, or 3"
        input = gets.chomp
        if input.to_i == 2
            current_rod = rod2
        elsif input.to_i == 3
            current_rod = rod3
        end

        current_rod
    end

    def which_end
        current_rod = rod1

        begin
            p "select a rod: 1, 2, or 3"
            input = gets.chomp.to_i
            if input == 2
                current_rod = rod2
            elsif input == 3
                current_rod = rod3
            end
            
            raise RuntimeError.new("cannot pick same rod, try again") if current_rod == which_start
        rescue RuntimeError => e
            puts e.message
            # puts "try again!"
            retry
        end
        current_rod
    end

    def win?
        (rod3.length) == 3 && (rod3 == rod3.sort)
    end
end
