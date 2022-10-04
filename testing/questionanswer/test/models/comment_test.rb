require "test_helper"

class CommentTest < ActiveSupport::TestCase
  test "simple create a single standalone comment" do
    q = Question.create(question: "This is a test question")
    a = q.answers.create(body: "This is a test answer")
    c = a.comments.create(body: "This is a test comment")
    assert c.valid?
  end
end
