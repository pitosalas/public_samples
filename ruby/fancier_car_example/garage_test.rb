require 'minitest/autorun'
require_relative 'garage'

describe "Basic test" do
  before do
    @g = Garage.new(floor:2, space: 50)
  end

  it "can create garages with levels" do
    expect(@g.total_spaces).must_equal 100
  end
  
  
end
