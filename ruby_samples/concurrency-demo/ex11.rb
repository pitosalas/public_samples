require 'benchmark'
require_relative 'badarray'

barray = BadArrayList.new
n = 100

threads = []
n.times do |val|
  threads << Thread.new do
    barray.add_at_end val
    barray.get_end_value
  end
end
threads.map(&:join)
puts barray
