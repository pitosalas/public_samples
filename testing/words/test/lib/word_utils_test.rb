require_relative "../test_helper"

class WordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "simple word" do
    w = WordUtils.new "hello"
    assert_equal 5, w.length
  end

  test "langage check" do
    w = WordUtils.new "hello"
    assert_equal :english, w.language
  end
end
