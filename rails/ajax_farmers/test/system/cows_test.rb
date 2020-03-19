require "application_system_test_case"

class CowsTest < ApplicationSystemTestCase
  setup do
    @cow = cows(:one)
  end

  test "visiting the index" do
    visit cows_url
    assert_selector "h1", text: "Cows"
  end

  test "creating a Cow" do
    visit cows_url
    click_on "New Cow"

    fill_in "Farmer", with: @cow.farmer_id
    fill_in "Name", with: @cow.name
    click_on "Create Cow"

    assert_text "Cow was successfully created"
    click_on "Back"
  end

  test "updating a Cow" do
    visit cows_url
    click_on "Edit", match: :first

    fill_in "Farmer", with: @cow.farmer_id
    fill_in "Name", with: @cow.name
    click_on "Update Cow"

    assert_text "Cow was successfully updated"
    click_on "Back"
  end

  test "destroying a Cow" do
    visit cows_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Cow was successfully destroyed"
  end
end
