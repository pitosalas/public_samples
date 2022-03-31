# from https://betterprogramming.pub/multithreaded-ruby-synchronization-race-conditions-and-deadlocks-f1f1a7cddcea

resource_a = []

threads = []
threads << Thread.new do |_t|
  50.times do |i|
    resource_a << i
  end
end

threads << Thread.new do |_t|
  50.times do |i|
    resource_a << i
  end
end

threads.each(&:join)

puts resource_a.length # will output 100
