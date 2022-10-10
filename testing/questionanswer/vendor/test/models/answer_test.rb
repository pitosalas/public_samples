require "test_helper"

class AnswerTest < ActiveSupport::TestCase
  test "simple create a single standalone answer" do
    q = Question.create(question: "This is a test question")
    a = q.answers.create(body: "This is a test answer")
    assert a.valid?
  end
end
