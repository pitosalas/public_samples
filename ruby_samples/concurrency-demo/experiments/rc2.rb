@balance = 0
count = 100
t1 = Thread.start do
  @lock = Mutex.new
  @lock.synchronize do
    count.times do
      @balance += 100
      sleep 0.0000001
    end
    puts "[t1] Balance is $#{@balance}      (after adding $100 x #{count})\n"
    count.times do
      @balance -= 100
    end
    sleep(rand(0..2))
    puts "[t1] Balance is $#{@balance}     (after subtracting $100 x #{count})\n"
  end
end

t2 = Thread.start do
  @lock1 = Mutex.new
  @lock1.synchronize do
    count.times do
      @balance += 100
    end
    puts "[t2] Balance is $#{@balance}       (after adding $100 x #{count})\n"
    count.times do
      @balance -= 100
      sleep 0.0000001
    end
    sleep(rand(0..2))
    puts "[t2] Balance is $#{@balance}      (after subtracting $100 x #{count})\n"
  end
end

t1.join
t2.join

puts "\n\n*** Final Balance should be zero!"
puts "\n*** Actual Balance is $#{@balance}\n\n"
