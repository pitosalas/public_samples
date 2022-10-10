require "test_helper"

class ValidQuestionTest < ActiveSupport::TestCase
  test "simple word" do
    w = ValidQuestion.new "hello"
    assert w.valid?
  end
end
