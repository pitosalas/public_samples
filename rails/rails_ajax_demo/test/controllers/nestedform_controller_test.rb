require 'test_helper'

class NestedformControllerTest < ActionDispatch::IntegrationTest
  test "should get basic" do
    get nestedform_basic_url
    assert_response :success
  end

end
