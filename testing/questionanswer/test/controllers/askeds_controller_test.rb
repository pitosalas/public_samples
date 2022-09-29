require "test_helper"

class AskedsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @good = askeds(:life_question)
    @bad = askeds(:invalid_question)
  end

  test "should get index" do
    get askeds_url
    assert_response :success
  end

  test "should get new" do
    get new_asked_url
    assert_response :success
  end

  test "should create valid asked" do
    assert_difference("Asked.count") do
      post askeds_url, params: {asked: {answer: @good.answer, question: @good.question}}
    end
    assert_redirected_to asked_url(Asked.last)
  end

  # Check that when the creation fails, we respond with a :unprocessable_entity response
  test "should not create invalid asked" do
    assert_no_difference("Asked.count") do
      post askeds_url, params: {asked: {answer: @bad.answer, question: @bad.question}}
    end
    assert_response(:unprocessable_entity)
  end

  test "should show asked" do
    get asked_url(@good)
    assert_response :success
  end

  test "should get edit" do
    get edit_asked_url(@good)
    assert_response :success
  end

  test "should update asked" do
    patch asked_url(@good), params: {asked: {answer: @good.answer, question: @good.question}}
    assert_redirected_to asked_url(@good)
  end

  test "should destroy asked" do
    assert_difference("Asked.count", -1) do
      delete asked_url(@good)
    end

    assert_redirected_to askeds_url
  end
end
