class Counter
  attr_accessor :counter, :half_count

  def initialize
    @counter = 0
    @half_count = 0
  end

  def count
    @counter += 1
  end

  def half_count_inc
    @half_count += 1
  end
end

c = Counter.new

t1 = Thread.start do
  100000.times do
    c.count
    c.half_count += 1 if c.counter.even?
    sleep 0.0000001
  end
end

t2 = Thread.start do
  100000.times do
    c.count
    c.half_count += 1 if c.counter.even?
    sleep 0.0000001
  end
end

t1.join
t2.join

puts
puts "count() method was called (should be 200,000):              #{c.counter}"
puts "Value of half_count, should be counter/2:                   #{c.half_count}"
puts
