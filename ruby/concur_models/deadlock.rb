# From https://betterprogramming.pub/multithreaded-ruby-synchronization-race-conditions-and-deadlocks-f1f1a7cddcea

mutext_resource_a = Mutex.new
mutext_resource_b = Mutex.new

resource_a = []
resource_b = []

threads = []
threads << Thread.new do |_t|
  # The number is on purpose so high, so that it will create
  # a deadlock in your irb as well
  100_000_000.times do |i|
    mutext_resource_a.synchronize do
      resource_a << i
      mutext_resource_b.synchronize do
        resource_b << i
      end
    end
  end
end

threads << Thread.new do |_t|
  100_000_000.times do |i|
    mutext_resource_b.synchronize do
      resource_b << i
      mutext_resource_a.synchronize do
        resource_a << i
      end
    end
  end
end

threads.each(&:join)
