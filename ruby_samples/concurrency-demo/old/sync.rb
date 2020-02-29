# Call the `load` at `scale` for `count` times, once after the other
class Sync
  def run(loadtype, scale, count)
    count.times do |i|
      Worker.new.run(loadtype, scale)
    end
    self
  end

  def cleanup
  end
end