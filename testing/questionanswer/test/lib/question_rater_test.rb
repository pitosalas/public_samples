require "test_helper"

class QuestionRaterTest < ActiveSupport::TestCase
  test "simple word" do
    w = QuestionRater.new "hello"
    refute w.good?
  end

  test "biggerr test" do
    w = QuestionRater.new "hello how are you today?"
    assert w.good?
  end

  test "biggest test word" do
    w = QuestionRater.new "hello how are you today, seriously, hello how are you today?"
    assert w.good?
  end
end
