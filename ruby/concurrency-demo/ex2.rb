require 'benchmark'
require_relative 'work'
require_relative 'setup'

setup "Fork Processes"
puts (Benchmark.measure do |_x|
  COUNT.times do
    print "."
    fork do
      Worker.do_cpu_work(CPU_WORK)
    end
    Process.waitall
  end
end )
teardown
