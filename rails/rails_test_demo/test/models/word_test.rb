require 'test_helper'

class WordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  setup do
    Word.destroy_all
    Word.create(eng: "house", ned: "huis")
    Word.create(eng: "boat", ned: "boot")
  end

  test "stores a translation" do
    word = Word.new(eng: "house", ned: "huis")
    assert_equal word.eng, "house"
    assert_equal word.ned, "huis"
  end

  test "has two words in database" do
    assert_equal Word.count, 2
  end

  test "can accept a new word" do
    Word.create(eng: "shoe", ned: "schoen")
    assert_equal Word.count, 3
  end

  test "cannot save a word without the english and dutch text" do
    w = Word.create(eng: "university")
    assert !w.valid?
  end

  test "Can return a random word" do
    w = Word.random
    assert_equal w.class, Word
  end

end

