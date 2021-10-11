class Level
  def initialize(num)
    @number = num
    @arrivals = {}
  end

  def arrive(vehicle, time)
    @arrivals[time] = vehicle
  end

  def last_arrival_time
    @arrivals.keys.max
  end

  def last_arrival_vehicle
    @arrivals[last_arrival_vehicle]
  end

  def summary
    "level #{@number}: #{@arrivals.size} cars"
  end
end
