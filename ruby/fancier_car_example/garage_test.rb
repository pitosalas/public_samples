require 'minitest/autorun'
require_relative 'garage'

describe "Garage Test" do
  before do
    floor_map1 =  %w(- - - - - - - - - -E -E -E -E -E -E -E -E -E -E)
    floor_map2 =  %w(- - - - - - - - - -ES -ES -ES -ES -ES -ES -ES -ES -ES -ES)
    floor_map3 =  %w(- - - - - - - - - -S -S -S -S -S -S -S -S -S -S -S)
    floor_map = %w(- - - -)
    @g1 = Garage.new([floor_map])
    @g2 = Garage.new([floor_map1, floor_map2, floor_map3])
    @g3 = Garage.new([])

# Create Cars, using Mocks and Factory
    @c1 = MiniTest::Mock.new
    @c1.expect(:is_electric, false)
    @c1.expect(:is_suv, false)
    @c2 = MiniTest::Mock.new
    @c2.expect(:is_electric, false)
    @c2.expect(:is_suv, false)
    @c3 = MiniTest::Mock.new
    @c3.expect(:is_electric, false)
    @c3.expect(:is_suv, false)
    @c4 = MiniTest::Mock.new
    @c4.expect(:is_electric, [false, false])
    @c4.expect(:is_suv, [false, false])
  end

  it "creates spaces in the right way" do
    assert_equal(@g1.space(0,0).class, Space)
  end

  it "properly handles a full garage" do
    @g1.find_parking_space(@c1).park_car(@c1)
    assert_equal(@g1.free_spaces, 3)
    @g1.find_parking_space(@c2).park_car(@c2)
    @g1.find_parking_space(@c3).park_car(@c3)
    @g1.find_parking_space(@c4).park_car(@c4)
    assert_equal(@g1.free_spaces, 0)
  end

  it "properly handles a full garage" do
    @g1.find_parking_space(@c1).park_car(@c1)
    @g1.find_parking_space(@c2).park_car(@c2)
    @g1.find_parking_space(@c3).park_car(@c3)
    @g1.find_parking_space(@c4).park_car(@c4)
    @g1.find_parking_space(@c4).park_car(@c4)
  end


  it "knows how to handle the NULL garage" do
    assert_equal @g3.total_floors, 0
    assert_equal @g3.total_spaces, 0
    assert_equal @g3.free_spaces, 0
  end


  it "can create garages with levels" do
    assert_equal @g1.total_spaces, 4
    assert_equal @g1.total_floors, 1
    assert_equal @g2.total_floors, 3
    assert_equal @g2.total_spaces, 58
  end

  it "can properly count free spaces" do
    assert_equal  4, @g1.free_spaces
  end 

  it "can locate a valid space" do
    space = @g1.find_parking_space(@c1)
    refute_nil space
  end

  it "can park a car" do
    space = @g1.find_parking_space(@c1)
    free_spaces = @g1.free_spaces
    space.park_car(@c1)
    assert_equal @g1.free_spaces, free_spaces - 1
  end
end
