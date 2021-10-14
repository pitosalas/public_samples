require_relative 'space'
require_relative 'car'

class Garage
  def initialize(floors)
    @floor_count = floors.length
    @floors = floors.map { |f| create_floor(f) }
  end

  def total_spaces
    count = 0
    @floors.each { |floor| floor.each { |space| count += 1 } }
    count
  end

  def free_spaces
    count = 0
    @floors.each { |floor| floor.each { |space| count += 1 if space.is_free } }
    count
  end

  def total_floors
    @floors.length
  end

  def find_parking_space(car)
    puts car.class
    is_electric = car.is_electric
    is_suv = car.is_suv
    space = find_free_space(is_electric, is_suv)
    space
  end

  def find_free_space(is_electric, is_suv)
    @floors.each do |floor|
      floor.each do |space|
        if space.is_free && space.ok_for_suv? == is_suv && space.charging_station? == is_electric
          return space
        end
      end
    end
    nil
  end

  def park(car)
    space = find_parking_space(car)
    if space
      space.park_car(car)
    end
  end

  def space(floor, number)
    @floors[floor][number]
  end

  private

  def create_floor(spaces_map)
    spaces_map.map { |s| Space.new(s) }
    result
  end

end
