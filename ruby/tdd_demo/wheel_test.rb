require_relative 'test_helper'
require_relative '../wheel'

describe Wheel do
  it "computes diameter" do
    wheel = Wheel.new(26, 1.5)
    wheel.diameter.must_be_within_delta 29, 0.01
  end
end
