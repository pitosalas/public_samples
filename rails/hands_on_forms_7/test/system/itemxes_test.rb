require "application_system_test_case"

class ItemxesTest < ApplicationSystemTestCase
  setup do
    @itemx = itemxes(:one)
  end

  test "visiting the index" do
    visit itemxes_url
    assert_selector "h1", text: "Itemxes"
  end

  test "should create itemx" do
    visit itemxes_url
    click_on "New itemx"

    check "Checkbox" if @itemx.checkbox
    fill_in "Dropdown", with: @itemx.dropdown
    fill_in "Radiobuttons", with: @itemx.radiobuttons
    click_on "Create Itemx"

    assert_text "Itemx was successfully created"
    click_on "Back"
  end

  test "should update Itemx" do
    visit itemx_url(@itemx)
    click_on "Edit this itemx", match: :first

    check "Checkbox" if @itemx.checkbox
    fill_in "Dropdown", with: @itemx.dropdown
    fill_in "Radiobuttons", with: @itemx.radiobuttons
    click_on "Update Itemx"

    assert_text "Itemx was successfully updated"
    click_on "Back"
  end

  test "should destroy Itemx" do
    visit itemx_url(@itemx)
    click_on "Destroy this itemx", match: :first

    assert_text "Itemx was successfully destroyed"
  end
end
