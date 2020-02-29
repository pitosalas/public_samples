require 'minitest/autorun'
require_relative 'garage'
require_relative 'level'
require_relative 'vehicle'

describe "my test" do
  before do
    @v1 = Vehicle.new(:police, 57)
    @v2 = Vehicle.new(:passenger, 60)
    @v3 = Vehicle.new(:passenger, 60)
    @v4 = Vehicle.new(:passenger, 60)
    @g = Garage.new(2)
    @g.arrive(0, @v1, 100)
    @g.arrive(0, @v2, 101)
    @g.arrive(0, @v3, 102)
    @g.arrive(1, @v4, 103)
  end

  it "can create garages with levels" do
    @g.size.must_equal 2
  end

  it "can create different kinds of vehicles" do
    (@v1.height + @v2.height + @v3.height + @v4.height).must_equal 237
  end

  it "can record arrival times of vehicles" do
    @g.last_arrival_vehicle.must_equal @v4
  end

  it "can display the status of the garage" do
    @g.summary.must_equal "Garage: 2 levels\nlevel 0: 3 cars, level 1: 1 cars"
  end
end
