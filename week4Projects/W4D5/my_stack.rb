class MyStack
  def initialize
    @store = []
  end

  def peek
    @store[-1]
  end

  def size
    @store.length
  end

  def pop
    @store.pop
  end

  def push(val)
    @store.push(val)
  end

  def empty?
    @store.empty?
  end

end