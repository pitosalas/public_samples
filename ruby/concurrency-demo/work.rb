class Worker
  def self.do_cpu_work(n=25)
    fib(n)
  end

  def self.fib(num)
    if (num < 2)
      num
    else
      fib(num - 1) + fib(num - 2)
    end
    sleep 0.000001
  end
end
