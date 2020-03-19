require 'benchmark'
require_relative 'badarray'

barray = BadArrayList.new
n = 100

n.times do |val|
  barray.add_at_end val
  barray.get_end_value
end
puts barray
