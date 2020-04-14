require 'benchmark'
require_relative 'work'
require_relative 'setup'

setup "Fork Processes"
puts (Benchmark.measure do |_x|
  COUNT.times do
    fork do
      print "."
      Worker.do_cpu_work(CPU_WORK)
    end
  end
  Process.waitall
end )
teardown
