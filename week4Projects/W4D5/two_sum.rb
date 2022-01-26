def bad_two_sum?(arr, target_sum)
  (0...arr.length).each do |i|
    (i + 1...arr.length).each do |j|
      return true if arr[i] + arr[j] == target_sum
    end
  end
  false
end

# The time complexity would be O(n^2) because of the nested loop

def okay_two_sum?(arr, target_sum)
  sorted = arr.sort

  i = 0
  while i < arr.length
    num = target_sum - arr[i]
    new_arr = sorted[0...i] + sorted[i + 1..-1]
    return true if !b_search(new_arr, num).nil?
    i += 1
  end

  false
end

# O(nlog(n))

def b_search(arr, num)
  mid = arr.length / 2
  return nil if arr.empty?
  return mid if arr[mid] == num
  left = arr[0...mid]
  right = arr[mid + 1..-1]
  if num < arr[mid]
    b_search(left, num)
  else
    idx = b_search(right, num)
    return nil if idx.nil?
    idx + mid + 1
  end
end

def two_sum?(arr, target_sum)
  hash = {}

  arr.each do |ele|
    hash[ele] = true
  end

  hash.each do |k, v|
    return true if hash[(target_sum - k)] && k != target_sum - k
  end
  false
end

# O(n)

arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false
p two_sum?(arr, 14)
p two_sum?(arr, 8)
p two_sum?(arr, 1)