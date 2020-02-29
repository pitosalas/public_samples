require 'benchmark'
require_relative 'work'
require 'concurrent'

pool = Concurrent::FixedThreadPool.new(100)
n = 1000
threads = []
Benchmark.bm(20) do |bench|
  bench.report("#{n} threads in pool") do
    n.times do
      pool.post do
        Worker.do_cpu_work
      end
    end
    pool.shutdown
    pool.wait_for_termination
  end
  bench.report("#{n} threads no pool") do
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
