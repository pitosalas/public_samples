class Garage
  def initialize(size)
    @levels = []
    size.times { |l| @levels << Level.new(l)}
    @last_time = 0
  end

  def size
    @levels.size
  end

  def arrive(level, vehicle, time)
    @levels[level].arrive(vehicle, time)
    if (time > @last_time)
      @last_time = time
      @last_arrival_vehicle = vehicle
    end
  end

  def last_arrival_vehicle
    @last_arrival_vehicle
  end

  def summary
    sum = "Garage: #{size} levels\n"
    levels = @levels.map(&:summary).join(", ")
    sum + levels
  end
end
