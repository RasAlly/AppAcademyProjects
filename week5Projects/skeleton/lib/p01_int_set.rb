class MaxIntSet

  attr_accessor :store

  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    if num > @store.length || num < 0
      raise "Out of bounds"
    else
      # p @store[num]
      @store[num] = true
    end
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num] == true
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet

  attr_reader :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    # p @store
    self[num] << num
    # p @store
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    @store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count
  attr_accessor :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !self[num].include?(num)
      self[num] << num
      @count += 1
      resize! if @count > @store.length
    end
  end

  def remove(num)
    if self[num].include?(num)
      self[num].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    # p @store
    self[num].include?(num)
  end

  private

  def [](num)
    @store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    array = Array.new(@store.length * 2) { Array.new }
    @store.each do |sub_arr|
      sub_arr.each do |num|
        array[num % array.length] << num
      end
    end
    # p array
    @store = array
    # p @store
  end
end
