def thirds(in_array)
  slices = []
  in_array.each_slice(3).each { |x| slices << x}
  throw Exception unless in_array.length % 3 == 0

  num_slices = slices.length
  slice = 0
  result_slices = []
  while slice < num_slices
    result_slices << slices[slice + 1] unless (slice == num_slices-1)
    result_slices << slices[slice]
    slice += 2
  end
  result_slices.flatten
end
