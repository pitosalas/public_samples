# Call the fake mailer <count> times, in a forked process

class Forking
  def run(loadtype, scale, count)
    count.times do
      fork do
        Worker.new.run(loadtype, scale)
      end
    end
    self
  end

  def cleanup
    Process.waitall
  end
end
