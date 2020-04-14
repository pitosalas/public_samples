require 'benchmark'
require_relative 'work'
require_relative 'setup'

setup "Theading (GIL!)"
threads = []

puts(Benchmark.measure {
  COUNT.times do |_i|
    threads << Thread.new do
      print "."
      Worker.do_cpu_work(CPU_WORK)
    end
  end
  threads.map(&:join)
})
teardown
