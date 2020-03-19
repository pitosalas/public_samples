POOL_SIZE = 10

class SimplePool
  def run(loadtype, scale, count)
    jobs = Queue.new
    count.times{|i| jobs.push i}

    @workers = (POOL_SIZE).times.map do
      Thread.new do
        begin      
          while x = jobs.pop(true)
            Worker.new.run(loadtype, scale)
          end
        rescue ThreadError
        end
      end
    end
    self
  end

  def cleanup
    @workers.map(&:join)
  end
end
