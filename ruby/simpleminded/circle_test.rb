require 'minitest/autorun'
require 'minitest/spec'
require_relative 'circle'
require_relative 'point'

describe Circle, "Circle Tests" do

  # Runs codes before each expectation
  before do
    @point = Point.new(6,5)
    @radius = 20
    @circle = Circle.new(@point,@radius)
  end

  describe "when asked about the area" do
    it "should be the abs of the differences between coordinates" do
      area = Math::PI * (@radius ** 2)
      @circle.area.must_be :==, area
    end
  end

  describe "when asked about the midpoint" do
    it "should be a Point" do
      @circle.p.must_be_instance_of Point
    end
  end

  describe "when asked about the radius" do
    it "should be a float" do
      @circle.r.must_be_instance_of Float
    end
  end
end
