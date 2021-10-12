require_relative 'space'

class Garage
  def initialize(floor:, space:)
    @floor_count = floor
    @space_count = space
    @floors = create_floors(floor_count: floor, spaces_count: space)
  end

  def total_spaces
    count = 0
    @floors.each { |floor| floor.each { |space| count += 1 } }
    count
  end
   
  def find_parking_space(car)
    nil
  end

  def park_car(car, space)
  end

  def contains_space?(space)
    false
  end

  def locate_free_space(car)
    nil
  end

  def set_space_property(space:, suv:, electric:)
    space.set_sproperty(suv, electric)
  end

  private

  def create_floors(floor_count:, spaces_count:)
    floors = []
    floor_count.times do
      floors << create_spaces(spaces_count)
    end
    floors
  end


  def create_spaces(count)
    spaces = []
    count.times do  |space|
      spaces << Space.new
    end
    spaces
  end
  


end
