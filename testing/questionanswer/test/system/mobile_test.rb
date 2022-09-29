require "mobile_system_test_case"

class PostsTest < MobileSystemTestCase
  test "visiting the index" do
    visit askeds_url
    assert_selector "h1", text: "Askeds"
  end
end
