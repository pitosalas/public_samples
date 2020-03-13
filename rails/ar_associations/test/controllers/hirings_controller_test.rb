require 'test_helper'

class HiringsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hiring = hirings(:one)
  end

  test "should get index" do
    get hirings_url
    assert_response :success
  end

  test "should get new" do
    get new_hiring_url
    assert_response :success
  end

  test "should create hiring" do
    assert_difference('Hiring.count') do
      post hirings_url, params: { hiring: { course_id: @hiring.course_id, student_id: @hiring.student_id } }
    end

    assert_redirected_to hiring_url(Hiring.last)
  end

  test "should show hiring" do
    get hiring_url(@hiring)
    assert_response :success
  end

  test "should get edit" do
    get edit_hiring_url(@hiring)
    assert_response :success
  end

  test "should update hiring" do
    patch hiring_url(@hiring), params: { hiring: { course_id: @hiring.course_id, student_id: @hiring.student_id } }
    assert_redirected_to hiring_url(@hiring)
  end

  test "should destroy hiring" do
    assert_difference('Hiring.count', -1) do
      delete hiring_url(@hiring)
    end

    assert_redirected_to hirings_url
  end
end
