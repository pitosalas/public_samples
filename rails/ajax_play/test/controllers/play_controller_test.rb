require "test_helper"

class PlayControllerTest < ActionDispatch::IntegrationTest
  test "should get do_show" do
    get play_do_show_url
    assert_response :success
  end

  test "should get do_hide" do
    get play_do_hide_url
    assert_response :success
  end

  test "should get do_toggle" do
    get play_do_toggle_url
    assert_response :success
  end

  test "should get do_fadeout" do
    get play_do_fadeout_url
    assert_response :success
  end

  test "should get do_fadein" do
    get play_do_fadein_url
    assert_response :success
  end

  test "should get do_shrink" do
    get play_do_shrink_url
    assert_response :success
  end

  test "should get do_unshrink" do
    get play_do_unshrink_url
    assert_response :success
  end
end
