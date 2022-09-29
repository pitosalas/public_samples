require "application_system_test_case"

class AskedsTest < ApplicationSystemTestCase
  setup do
    @life = askeds(:life_question)
  end

  test "visiting the index" do
    visit askeds_url
    assert_selector "h1", text: "Askeds"
  end

  test "should create asked" do
    visit askeds_url
    click_on "New asked"

    fill_in "Answer", with: @life.answer
    fill_in "Question", with: @life.question
    click_on "Create Asked"

    assert_text "Asked was successfully created"
    click_on "Back"
  end

  test "should update Asked" do
    visit asked_url(@life)
    click_on "Edit this asked", match: :first

    fill_in "Answer", with: @life.answer
    fill_in "Question", with: @life.question
    click_on "Update Asked"

    assert_text "Asked was successfully updated"
    click_on "Back"
  end

  test "should destroy Asked" do
    visit asked_url(@life)
    click_on "Destroy this asked", match: :first

    assert_text "Asked was successfully destroyed"
  end
end
