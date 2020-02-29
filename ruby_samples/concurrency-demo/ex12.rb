require 'benchmark'
require_relative 'better_array'

barray = BetterArrayList.new
n = 10000

threads = []
n.times do |val|
  threads << Thread.new do
    barray.incr :b
    barray.decr :b
  end
end
threads.map(&:join)

puts barray
