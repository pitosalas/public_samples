require "test_helper"

class QuestionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @good = questions(:life_question)
    @bad = questions(:invalid_question)
  end

  test "should get index" do
    get questions_url
    assert_response :success
  end

  test "should get new" do
    get new_question_url
    assert_response :success
  end

  test "should create question" do
    assert_difference("Question.count") do
      post questions_url, params: {question: {answer: @good.answer, question: @good.question}}
    end

    assert_redirected_to question_url(Question.last)
  end

  test "should show question" do
    get question_url(@good)
    assert_response :success
  end

  test "should get edit" do
    get edit_question_url(@good)
    assert_response :success
  end

  test "should update question" do
    patch question_url(@good), params: {question: {answer: @good.answer, question: @good.question}}
    assert_redirected_to question_url(@good)
  end

  test "should destroy question" do
    assert_difference("Question.count", -1) do
      delete question_url(@good)
    end

    assert_redirected_to questions_url
  end
end
