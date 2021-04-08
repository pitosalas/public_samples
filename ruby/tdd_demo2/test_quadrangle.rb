require 'minitest/autorun'
require_relative 'quadrangle'

describe "Quad Tests" do
  describe "contructor" do
    def setup
      @p1 = Point.new(0,0)
      @p2 = Point.new(4,0)
      @p3 = Point.new(0,6)
      @p4 = Point.new(5,0)
      @q1 = Quadrangle.new(@p1, @p2, @p3, @p4)
    end
    
    it "should be able to create one" do
      assert_equal Quadrangle, @q1.class
    end

    it "should be able to check validity" do
      assert @q1.valid?
    end

    it "should be able to comnpute its own area" do
      assert_equal 25, @q1.area
    end

  end
end
