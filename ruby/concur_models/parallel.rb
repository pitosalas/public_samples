# parallel.rb from https://engineering.universe.com/introduction-to-concurrency-models-with-ruby-part-i-550d0dbb970
range1 = 0...5_000_000
range2 = 5_000_000...10_000_000
number = 8_888_888
puts "Parent #{Process.pid}"
fork { puts "Child1 #{Process.pid}: #{range1.to_a.index(number)}" }
fork { puts "Child2 #{Process.pid}: #{range2.to_a.index(number)}" }
# Process.wait
