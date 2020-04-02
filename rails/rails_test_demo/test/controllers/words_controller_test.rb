require 'test_helper'

class WordsControllerTest < ActionDispatch::IntegrationTest
  test "should get random" do
    get words_random_url
    assert_response :success
  end

end
