require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  test "should get the 2 words" do
    art1 = Article.new(body: "hello there!")
    assert_equal art1.words, 2
  end

  test "should get the 0 words" do
    art1 = Article.new(body: "123,123!")
    assert_equal 0, art1.words
  end
end
