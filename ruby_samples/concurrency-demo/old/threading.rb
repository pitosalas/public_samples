# Call the loadtype of scale count times, in a thread
class Threading
  def run(loadtype, scale, count)
    @threads = []
    count.times do |i|
      @threads << Thread.new do
        Worker.new.run(loadtype, scale)
      end
    end
    self
  end

  def cleanup
    @threads.map { |t| t.join}
  end
end