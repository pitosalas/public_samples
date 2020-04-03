require 'benchmark'
require_relative 'work'
require_relative 'setup'

setup "Theading (COUNT*100)"
threads = []

puts(Benchmark.measure{
  COUNT*100.times do |i|
    print "."
    threads << Thread.new do
      Worker.do_cpu_work(CPU_WORK)
    end
  end
  threads.map(&:join)
})
teardown
