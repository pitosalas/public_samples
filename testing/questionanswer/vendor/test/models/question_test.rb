require "test_helper"

class QuestionTest < ActiveSupport::TestCase
  test "simple invocation of word utils" do
    w = Question.create(question: "What is the meaning of life, the universe, and everything?")
    assert w.valid?
  end
end
