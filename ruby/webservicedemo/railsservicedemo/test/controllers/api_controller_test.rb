require 'test_helper'

class ApiControllerTest < ActionController::TestCase
  test "should get school_info" do
    get :school_info
    assert_response :success
  end

  test "should get course_info" do
    get :course_info
    assert_response :success
  end

  test "should get student_info" do
    get :student_info
    assert_response :success
  end

end
