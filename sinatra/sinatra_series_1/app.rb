# app.rb
require 'sinatra'
require 'sinatra/activerecord'
require_relative 'models/user.rb'

get '/' do
  "Hello Sinatra!"
end

get '/api/users/:name' do
  name = params[:name]
  users = User.where(name: name)
  if users.length > 0
    u = users[0].slice(:name, :bio, :email)
  else 
    u = {error: "No such user" }
  end
  u.to_json
end
