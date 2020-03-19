require 'benchmark'

require_relative 'mailer'
require_relative 'simple_pool'
require_relative 'forking'
require_relative 'sync'
require_relative 'threading'
require_relative 'cell'
require_relative 'worker'

class MultiRun
  attr_reader :mode, :loadtype, :scale, :count

  def parse_args
    if ARGV.length != 4
      puts "args: mode, loadtype, scale, count"
      puts "  modes: s(ync), f(ork), t(hread), c(celluloid), p(ool)"
      puts "  loadtype: fib, mem"
      puts "  scale: number between 1-10"
      puts "  count: number of iterations"
      exit(0)
    end

    @mode = ARGV[0]
    @loadtype = ARGV[1]
    @scale = ARGV[2].to_i
    @count = ARGV[3].to_i
  end

  def run_benchmarks
    puts
    puts "[Running on ruby: #{RUBY_VERSION} with mode: #{mode}, loadtype: #{loadtype}, scale: #{scale}, count: #{count} ]"
    puts

    Benchmark.bm(14) do |x|
      x.report("sync")        { Sync.new.run(loadtype, scale, count).cleanup } if mode.include? "s"
      x.report("fork")        { Forking.new.run(loadtype, scale, count).cleanup } if mode.include? "f"
      x.report("thread")      { Threading.new.run(loadtype, scale, count).cleanup } if mode.include? "t"
      x.report("simple pool") { SimplePool.new.run(loadtype, scale, count).cleanup } if mode.include? "p"
      x.report("celluloid")   { Cell.new.run(loadtype, scale, count).cleanup } if mode.include? "c"
    end

    puts
    puts "[End]"
  end
end

mr = MultiRun.new
mr.parse_args
mr.run_benchmarks
