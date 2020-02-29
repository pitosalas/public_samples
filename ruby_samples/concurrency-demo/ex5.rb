require 'benchmark'
require_relative 'work'

threads = []
n = 1000
Benchmark.bm(20) do |bench|
  bench.report("#{n} threads    ") do
    n.times do
      threads << Thread.new do
        Worker.do_cpu_work
      end
    end
    threads.map(&:join)
  end
  bench.report("#{n} no threads") do
    n.times do
      Worker.do_cpu_work
    end
  end
end
