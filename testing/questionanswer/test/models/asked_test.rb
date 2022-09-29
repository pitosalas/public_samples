require "test_helper"

class AskedTest < ActiveSupport::TestCase
  test "simple invocation of word utils" do
    w = Asked.create(question: "What is the meaning of life, the universe, and everything?")
    assert w.valid?
  end
end
