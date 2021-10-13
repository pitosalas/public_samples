class Space

  attr_accessor :is_free

  def initialize(coded_space)
    @free = true
    @charging_station = "C".include? coded_space
    @ok_for_suv = "S".include? coded_space
  end

  def charging_station?
    @charging_station
  end

  def ok_for_suv?
    @ok_for_suv
  end

  def occupied?
    !is_free?
  end

  def occupying_car
    nil
  end

  def park_car car
    @car = car
    @free = false
  end

end
