require_relative './test_helper.rb'

describe Event do
  it "can add events" do
    Event.create(name: "An Event")
    Event.create(name: "Another Event")
    Event.all.size.must_equal 2
  end
end
