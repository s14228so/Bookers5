require 'test_helper'

class V1::BooksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get v1_books_index_url
    assert_response :success
  end

  test "should get create" do
    get v1_books_create_url
    assert_response :success
  end

  test "should get show" do
    get v1_books_show_url
    assert_response :success
  end

  test "should get destroy" do
    get v1_books_destroy_url
    assert_response :success
  end

end
