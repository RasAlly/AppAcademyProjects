class MyQueue

  def initialize
    @store = []
  end

  def peek
    @store[-1]
  end

  def size
    @store.length
  end

  def enqueue(val)
    @store.unshift(val)
  end

  def dequeue
    @store.pop
  end

  def empty?
    @store.empty?
  end
end