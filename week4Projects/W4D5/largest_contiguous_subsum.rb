def largest_contiguous_subsum(arr)
  subs = []
  (0...arr.length).each do |i|
    (i...arr.length).each do |j|
      subs << arr[i..j]
    end
  end
  max = 0
  subs.each do |sub_arr|
    if sub_arr.sum > max
      max = sub_arr.sum
    end
  end
  max
end

def largest_contiguous_subsum(arr)
  curr_sum = 0
  max_sum = arr[0]

  i = 0
  while i < arr.length
    curr_sum += arr[i]
    if curr_sum > max_sum
      max_sum = curr_sum
    elsif curr_sum < 0
      curr_sum = 0
    end
    i += 1
  end

  max_sum
end

list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8

# possible sub-sums
# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]    # => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]          # => -7