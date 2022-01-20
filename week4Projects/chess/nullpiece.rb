require 'singleton'
require_relative 'piece'

class NullPiece < Piece 
  include Singleton
  attr_reader :color 

   def initialize
    @color = 'green'
    @symbol = :_ 
   end 

  # def moves 
  # end

  def symbol
    @symbol
  end

end