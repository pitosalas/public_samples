require_relative 'test_helper'
require_relative '../gear'
require_relative '../wheel'

describe Gear do
  it "Calculates gear inches" do
    gear = Gear.new(chain: 52, cog: 11, rim: 26, tire: 1.5)
    gear.gear_inches.must_be_within_delta 137.1, 0.01
  end
end
