require 'minitest/autorun'
require 'minitest/spec'
require_relative 'rectangle'
require_relative 'point'

describe Rectangle, "Rectangle Tests" do

  # Runs codes before each expectation
  before do
    @pointa = Point.new(6,5)
    @pointb = Point.new(10,9)
    @rect = Rectangle.new(@pointa,@pointb)
  end

  describe "when asked about the area" do
    it "should be the abs of the differences between coordinates" do
      area = (@pointa.x - @pointb.x).abs * (@pointa.y - @pointb.y).abs
      @rect.area.must_be :==, area
    end
  end

  describe "when asked about the points" do
    it "should be a Point" do
      @rect.x.must_be_instance_of Point
    end
  end

  describe "when asked about the points" do
    it "should be a Point" do
      @rect.y.must_be_instance_of Point
    end
  end

end
