class Game

    attr_accessor :rod1, :rod2, rod3

    def initialize
        @rod1 = [1, 2, 3, 4, 5, 6]
        @rod2 = []
        @rod3 = []
    end

    # def print
        
    # end

    def ask_user
        
    end

    def win?
        (rod3.length) == 6 && (rod3 == rod3.sort)
    end
end