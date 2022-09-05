#fibonacci series between c and d
def fibarray(c,d)
  arr= []
  a = 0
  b = 1
    arr.append(a)
    arr.append(b)
    while b < d do
      arr.append(b)
      a= b
      b= a+b
    end
  slicedarray = []
  arr.each{ |element|  
    if element >= c && element < d
      slicedarray.push(element)
    end
  }
  return slicedarray
end

# find the sum of the missing numbers in the sequence and add them
def ms(array)
	a = array[0]
	b = array[-1]
	array2 = []
  # append missing array to a second array
	for y in a..b do
		if not array.include?(y) 
			array2.append(y)
		end
  #add the missing numbers
  add = 0
  array2.each{|z|
  add = add + z
  }
 return add
end

#check if x is multiple of y
def cm(n, multiple)
	  a = 1 == 2
  if num % multiple == 0
    a = true
  end
  return a
end
	

c = fibarray(0,10)
print("Fibonacci sequence: #{c}")
puts ""
sum = missing_sum(c)
puts ("Sum of missing numbers: #{sum}")
multiple = 2;
missing_sum = checkmultiple(sum, multiple)
puts ("is missing sum a multiple of #{ multiple}? #{missing_sum}")