require 'benchmark'
require_relative 'work'

puts "*** Sequential***"
puts Benchmark.measure {|x|
  1000.times do
    Worker.do_cpu_work
  end
}
puts 
