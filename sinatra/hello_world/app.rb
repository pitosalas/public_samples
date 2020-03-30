# myapp.rb
require 'sinatra'
require 'YAML'
require 'byebug'

get '/' do
  '<h1>Welcome to our dummy system<h1>'
  binding.byebug
  request.inspect.to_yaml
end

get '/info' do
  '<h2>lots of wonderful things will happen!<h2>'*10
end
get '/goodbye' do
  puts "******** processing /goodbye path for #{params[:univ]}"
  erb "<h1>Sad to see go #{params[:univ]} today at <%= Time.now %><h1>"
end  
