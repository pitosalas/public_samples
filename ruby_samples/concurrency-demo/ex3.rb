require 'benchmark'
require_relative 'work'

puts "**** Theading (GIL!) ***"
threads = []

puts Benchmark.measure {
  1000.times do |_i|
    threads << Thread.new do
      Worker.do_cpu_work
    end
  end
  threads.map(&:join)
}
puts
