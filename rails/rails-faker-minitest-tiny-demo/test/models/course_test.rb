require "test_helper"

class CourseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  describe "With all test" do
    it "tautology works" do
      1.must_equal 1
    end

    it "should be able to find a certain course" do
      Course.where(number: 167).size.must_equal 1
    end
  end
end
