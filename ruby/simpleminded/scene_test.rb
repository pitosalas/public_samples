require 'minitest/autorun'
require 'minitest/spec'
require_relative 'scene'
require_relative 'point'
require_relative 'rectangle'
require_relative 'circle'
require_relative 'triangle'

describe Circle, "Circle Tests" do
  # Runs codes before each expectation
  before do
    @scene = Scene.new
    @rect = Rectangle.new(Point.new(20, 50), Point.new(30, 10))
    @circle = Circle.new(Point.new(5, 10), 10)
    @tri = Triangle.new(Point.new(6, 5), Point.new(10, 9), Point.new(16, 8))
  end

  describe "before any shapes are created" do
    it "total shapes should be 0" do
      assert_equal @scene.shape_count, 0
    end
  end

  describe "before any shapes are created" do
    it "total area should be 0" do
      assert_equal @scene.total_area, 0
    end
  end

  describe "manipulating shapes" do
    it "shape testing" do
      @scene.add_shape(@rect)
      @scene.add_shape(@circle)
      @scene.add_shape(@tri)
      @scene.shape_count.must_be :==, 3
      @scene.remove_shape(1)
      @scene.shape_count.must_be :==, 2
    end

    it "area testing" do
      @scene.add_shape(@rect)
      @scene.add_shape(@circle)
      @scene.add_shape(@tri)
      @scene.total_area.must_be :==, @rect.area + @circle.area + @tri.area
      @scene.remove_shape(1)
      @scene.total_area.must_be :==, @rect.area + @tri.area
    end
  end
end
