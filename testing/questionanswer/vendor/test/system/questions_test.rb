require "application_system_test_case"

class QuestionsTest < ApplicationSystemTestCase
  setup do
    @question = questions(:unanswered_question)
  end

  test "visiting the index" do
    visit questions_url
    assert_text "Questions"
  end

  test "should create question" do
    visit questions_url
    click_on "New Question"

    fill_in "Question", with: @question.question
    click_on "Create Question"

    assert_text "Question was successfully created"
    click_on "Back"
  end

  test "should update Question" do
    visit question_url(@question)
    click_on "Edit this question", match: :first

    fill_in "Question", with: @question.question
    click_on "Update Question"

    assert_text "Question was successfully updated"
    click_on "Back"
  end

  test "should destroy Question" do
    visit question_url(@question)
    click_on "Destroy this question", match: :first

    assert_text "Question was successfully destroyed"
  end
end
