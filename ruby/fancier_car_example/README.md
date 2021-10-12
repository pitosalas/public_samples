# code sketch, not valid code!

class Car
   def make
   def model
   def year
   def electric?
   def tall?
   def current_price
   def to_html
end

class Garage
   def find_parking_space(car)
   def park_car(car, space)
   def contains_space(space)
end

class Space
    def is_free?
    def occupied?
    def charging_station?
    def occupying_car
end

#test
    c = Car.new(...)
    g = Garage.new(....)
    space = g.find_parking_space(c)
    assert space != nil
    g.park_car(c, space)
    assert space.occupied?

    1..10.times do
      car = Car.new(...)
      space = g.find_parking_space(car)
      g.park_car(car, space)
    end