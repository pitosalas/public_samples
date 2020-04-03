require 'benchmark'
require_relative 'work'
require_relative 'setup'

setup "Theading (GIL!)"
threads = []

puts(Benchmark.measure {
  COUNT.times do |_i|
    print "."
    threads << Thread.new do
      Worker.do_cpu_work(CPU_WORK)
    end
  end
  threads.map(&:join)
})
teardown
