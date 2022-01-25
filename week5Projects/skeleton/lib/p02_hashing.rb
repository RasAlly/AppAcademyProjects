class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    self.inject(8){ |hash, num| (hash + 11) * (num+9) * 40}
  end
  # p a.object_id
  #1694149262626455536
end
# class String
#   def hash
#     alph = ('a'..'z').to_a
#     arr =  self.split('').map{ |char| self.index(char) }
#     arr.inject(7) do |hash, i|
#       idx = self.index(char)
#       hash + (idx + i) * 124 + 44 ** 6
#     end
#   end
# end

str = "string"
p str.hash

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
