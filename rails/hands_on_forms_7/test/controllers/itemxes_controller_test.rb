require "test_helper"

class ItemxesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @itemx = itemxes(:one)
  end

  test "should get index" do
    get itemxes_url
    assert_response :success
  end

  test "should get new" do
    get new_itemx_url
    assert_response :success
  end

  test "should create itemx" do
    assert_difference("Itemx.count") do
      post itemxes_url, params: { itemx: { checkbox: @itemx.checkbox, dropdown: @itemx.dropdown, radiobuttons: @itemx.radiobuttons } }
    end

    assert_redirected_to itemx_url(Itemx.last)
  end

  test "should show itemx" do
    get itemx_url(@itemx)
    assert_response :success
  end

  test "should get edit" do
    get edit_itemx_url(@itemx)
    assert_response :success
  end

  test "should update itemx" do
    patch itemx_url(@itemx), params: { itemx: { checkbox: @itemx.checkbox, dropdown: @itemx.dropdown, radiobuttons: @itemx.radiobuttons } }
    assert_redirected_to itemx_url(@itemx)
  end

  test "should destroy itemx" do
    assert_difference("Itemx.count", -1) do
      delete itemx_url(@itemx)
    end

    assert_redirected_to itemxes_url
  end
end
