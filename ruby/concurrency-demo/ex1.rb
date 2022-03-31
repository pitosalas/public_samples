require 'benchmark'
require_relative 'work'
require_relative 'setup'

setup "No Concurrency"
puts(Benchmark.measure("user system user elapsed") do |_|
  COUNT.times do
    print "."
    Worker.do_cpu_work(CPU_WORK)
  end
end)
teardown
