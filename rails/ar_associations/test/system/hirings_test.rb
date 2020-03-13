require "application_system_test_case"

class HiringsTest < ApplicationSystemTestCase
  setup do
    @hiring = hirings(:one)
  end

  test "visiting the index" do
    visit hirings_url
    assert_selector "h1", text: "Hirings"
  end

  test "creating a Hiring" do
    visit hirings_url
    click_on "New Hiring"

    fill_in "Course", with: @hiring.course_id
    fill_in "Student", with: @hiring.student_id
    click_on "Create Hiring"

    assert_text "Hiring was successfully created"
    click_on "Back"
  end

  test "updating a Hiring" do
    visit hirings_url
    click_on "Edit", match: :first

    fill_in "Course", with: @hiring.course_id
    fill_in "Student", with: @hiring.student_id
    click_on "Update Hiring"

    assert_text "Hiring was successfully updated"
    click_on "Back"
  end

  test "destroying a Hiring" do
    visit hirings_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Hiring was successfully destroyed"
  end
end
