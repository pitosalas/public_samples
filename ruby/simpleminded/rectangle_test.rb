require 'minitest/autorun'
require 'minitest/spec'
require_relative 'rectangle'
require_relative 'point'

describe Rectangle, "Rectangle Tests" do
  # Runs codes before each expectation
  before do
    @pointa = Point.new(6, 5)
    @pointb = Point.new(10, 9)
    @rect = Rectangle.new(@pointa, @pointb)
  end

  describe "when asked about the area" do
    it "should be the abs of the differences between coordinates" do
      area = (@pointa.x - @pointb.x).abs * (@pointa.y - @pointb.y).abs
      assert_equal @rect.area, area
    end
  end

  describe "when asked about the points" do
    it "should be a Point" do
      assert_equal @rect.x.class, Point
    end
  end

  describe "when asked about the points" do
    it "should be a Point" do
      assert_equal @rect.y.class, Point
    end
  end
end
