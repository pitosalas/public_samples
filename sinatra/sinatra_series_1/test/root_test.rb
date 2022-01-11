ENV['APP_ENV'] = 'test'

require_relative '../app'
require 'minitest/autorun'
require 'rack/test'

include Rack::Test::Methods

def app
  Sinatra::Application
end

describe 'The HelloWorld App' do
  it "says hello" do
    get '/'
    last_response.ok?
    assert_equal last_response.body, 'Hello Sinatra!'
  end

  it "returns user info" do
    get '/api/users/Pito'
    last_response.ok?
    json_response = JSON.parse(last_response.body, {symbolize_names: true})
    assert (json_response in {name: name, bio: bio, email: email})
  end
end
