require 'benchmark'
require_relative 'better_array'

barray = BetterArrayList.new
n = 10000
lock = Mutex.new

threads = []
n.times do |val|
  threads << Thread.new do
    lock.synchronize do
        barray.incr :b
        barray.decr :b
    end
  end
end
threads.map(&:join)

puts barray
