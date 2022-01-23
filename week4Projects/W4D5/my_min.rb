def my_min(arr)
  min = arr[0]
  (0...arr.length).each do |i|
    (i + 1...arr.length).each do |j|
      if arr[j] < min
        min = arr[j]
      elsif arr[i] < min
        min = arr[i]
      end
    end
  end
  min
end

def my_min(arr)
  min = arr[0]
  arr.each do |ele|
    if ele < min
      min = ele
    end
  end
  min
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5