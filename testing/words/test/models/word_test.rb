require_relative "../test_helper"

class WordTest < ActiveSupport::TestCase
  test "simple invocation of word utils" do
    w = Word.create(word: "testing")
    assert_equal 7, w.length
  end

  test "ensure there is always a word" do
    w = Word.create
    refute w.valid?
  end

  test "if there is no word, then length should raise and error" do
    w = Word.create
    assert_raises { w.length }
  end
end
