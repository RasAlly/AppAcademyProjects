require 'singleton'
require_relative 'piece'

class NullPiece < Piece 
  include Singleton

   def initialize
    @symbol = :_ 
   end 

  def moves 
  end

  def symbol
    @color
  end