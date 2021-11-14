require "test_helper"

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get messages_new_url
    assert_response :success
  end

  test "should get show" do
    get messages_show_url
    assert_response :success
  end
end
