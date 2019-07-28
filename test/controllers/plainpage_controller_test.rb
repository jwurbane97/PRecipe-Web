require 'test_helper'

class PlainpageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get plainpage_index_url
    assert_response :success
  end

end
