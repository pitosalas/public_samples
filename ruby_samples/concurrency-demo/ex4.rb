require 'benchmark'
require_relative 'work'

puts "**** Theading (Big) ***"
threads = []

puts Benchmark.measure{
    10_000.times do |i|
      threads << Thread.new do
        Worker.do_cpu_work
      end
    end
    threads.map(&:join)
}
puts 