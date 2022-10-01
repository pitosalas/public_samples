require "mobile_system_test_case"

class PostsTest < MobileSystemTestCase
  test "visiting the index" do
    visit questions_url
    assert_text "Questions"
  end
end
