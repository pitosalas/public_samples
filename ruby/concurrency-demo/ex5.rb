require 'benchmark'
require_relative 'work'
require_relative 'setup'

setup "Threads"
threads = []
n = THREADS
Benchmark.bm(COUNT) do |bench|
  bench.report("#{n} threads    ") do
    n.times do
      threads << Thread.new do
        Worker.do_cpu_work(CPU_WORK)
      end
    end
    threads.map(&:join)
  end
  bench.report("#{n} no threads") do
    n.times do
      Worker.do_cpu_work(CPU_WORK)
    end
  end
end
