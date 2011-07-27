require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get menus" do
    get :menus
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get sitemap" do
    get :sitemap
    assert_response :success
  end

end
