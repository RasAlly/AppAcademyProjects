def windowed_max_range(arr, w)
  current_max_range = 0
  i = 0
  while i < arr.length
    subarr = arr[i...(i + w)]
    range = subarr.max - subarr.min
    if range > current_max_range
      current_max_range = range
    end
    i += 1
  end
  current_max_range
end



# p windowed_max_range([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
# p windowed_max_range([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5
# p windowed_max_range([1, 0, 2, 5, 4, 8], 4) #== 6 # 2, 5, 4, 8
# p windowed_max_range([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 8