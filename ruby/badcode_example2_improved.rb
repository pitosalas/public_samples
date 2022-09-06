# fibonacci series between c and d
def fibarray(start_num, end_num)
  arr = []
  a = 0
  b = 1
  arr.append(a)
  arr.append(b)
  while b < end_num
    arr.append(b)
    a = b
    b = a + b
  end
  slicedarray = []
  arr.each do |element|
    if element >= start_num && element < end_num
      slicedarray.push(element)
    end
  end
  slicedarray
end

# find the sum of the missing numbers in the sequence and add them
def missing_sum(fib_array, start_num, end_num)
  missing_sum = 0
  (start_num..end_num).each {|i| missing_sum += i unless fib_array.include? i }
  missing_sum
end

# check if x is multiple of y
def checkmultiple(n, multiple)
  n % multiple == 0
end

start_num = 0
end_num = 10
fibnumbers = fibarray(start_num, end_num)
puts("Fibonacci sequence: #{fibnumbers}")
sum = missing_sum(fibnumbers, start_num, end_num)
puts("Sum of missing numbers: #{sum}")
multiple = 2
missing_sum = checkmultiple(sum, multiple)
puts("is missing sum #{sum} a multiple of #{multiple}? #{missing_sum}")
