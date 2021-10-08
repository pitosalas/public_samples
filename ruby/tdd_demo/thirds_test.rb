require "minitest/autorun"
require_relative "thirds_tdd"

# make sure array is of integers
# make sure argument is an array
#

# third(x)
#   -> accept an array of numbers
#   -> divide it into groups 3
#   - swap every pair of groups of 3, so, e.g. 5,4,3,11,33,23 -> 11,33,23,5,4,3

describe "null case" do
  it "works on an empty array" do
    expect([]).must_equal(thirds([]))
  end

  it "works on an array with three" do
    expect(thirds([1, 2, 3])).must_equal [1, 2, 3]
  end

  it "works on an array with 6" do
    expect(thirds([4, 5, 6, 1, 2, 3])).must_equal([1, 2, 3, 4, 5, 6])
  end

  it "rejects if not a multiple of 3" do
    assert_raises Exception do
      thirds(1, 2, 3, 4)
    end
  end

  it "works on an array with 6" do
    expect(thirds([1, 2, 3, 4, 6, 7, 8, 9, 10])).must_equal [4, 6, 7, 1, 2, 3, 8, 9, 10]
  end
end
