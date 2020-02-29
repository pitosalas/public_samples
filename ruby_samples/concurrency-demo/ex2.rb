require 'benchmark'
require_relative 'work'

puts "*** Fork Processes ****"
puts Benchmark.measure {|_x|
  1000.times do
    fork do
      Worker.do_cpu_work
    end
  end
}
