require 'minitest/autorun'
require "minitest/spec"

class Track
  attr_accessor :title
  attr_accessor :artist

  def initialize artist, title
    @artist = artist
    @title = title
  end
end

describe "Tract" do
  it "preserves state" do
    t = Track.new("Beatles", "Help")
    t.title.must_equal "Help"
  end
end
