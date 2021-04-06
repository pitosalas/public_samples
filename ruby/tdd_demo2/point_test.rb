require 'minitest/autorun'
require 'minitest/spec'
require_relative 'point'

describe Point, "Point Tests" do
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
      _(@point.y).must_be_instance_of Float
    end
  end
end
