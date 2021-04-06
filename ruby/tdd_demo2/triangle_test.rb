require 'minitest/autorun'
require 'minitest/spec'
require_relative 'triangle'
require_relative 'point'

describe Triangle, "Triangle Tests" do

  # Runs codes before each expectation
  before do
    @pointa = Point.new(6,5)
    @pointb = Point.new(10,9)
    @pointc = Point.new(15,8)
    @tri = Triangle.new(@pointa,@pointb,@pointc)
  end

  describe "when asked about the area" do
    it "should be 12 from the heron's formula" do
      @tri.area.floor.must_be :==, 12
    end
  end

  describe "when asked about the points" do
    it "should be a Point" do
      @tri.a.must_be_instance_of Point
    end
  end

  describe "when asked about the points" do
    it "should be a Point" do
      @tri.b.must_be_instance_of Point
    end
  end

  describe "when asked about the points" do
    it "should be a Point" do
      @tri.c.must_be_instance_of Point
    end
  end

end
