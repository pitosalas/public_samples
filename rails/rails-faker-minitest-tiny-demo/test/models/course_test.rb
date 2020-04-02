require "test_helper"

class CourseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  describe "With all test" do
    it "tautology works" do
      assert_equal 1, 1
    end

    it "should be able to find a certain course" do
      assert Course.where(number: 167).size == 1
    end
  end
end
