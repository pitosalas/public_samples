class Worker
  def initialize
  end

  def run(load, scale)
    if load == "fib"
      fib(scale)
    elsif load == "mem"
      mem(scale)
    else
      fail "Invalid 'workload'"
    end
  end

  def fib(n)
    n < 2 ? n : fib(n-1) + fib(n-2)
  end

  def mem(scale)
    big = Array.new(scale)
    scale.times do |s|
      small = Array.new(100_000)
      small.each_index { |i| small[i] = rand(20) }
      big[s] = small
    end
  end
end