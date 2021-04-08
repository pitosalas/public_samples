require 'minitest/autorun'
require_relative 'point'

describe "Point Tests" do
  # Runs codes before each expectation
  before do
    @point = Point.new(5, 6.9)
  end

  describe "when asked about the xcor" do
    it "should be a float" do
      _(@point.x).must_be_instance_of Float
    end
  end

  describe "when asked about the ycor" do
    it "should be a float" do
      assert_equal @point.y.class, Float
    end
  end

  describe "invalid inputs" do
    it "should not permit string input" do
      p = Point.new("foo", 100)
      assert_equal p.y.class, Float
      assert_equal p.x.class, Float
    end

    it "should have working accessors" do
      assert_equal 5, @point.x
      assert_equal 6.9, @point.y
    end
  end

end
