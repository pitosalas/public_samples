require 'sinatra'
require 'sinatra/activerecord'
require 'pry-byebug'
require './models/hashtag'
require './models/person'
require './models/message'


get '/' do
  "<h2>Hello Brandeis: Cosi 105b 2017. Long weekend Coming!</h2>"
end

get '/loaderio-b75252fc818e0fb0d9e3396bcd6d2c60/' do
  "loaderio-b75252fc818e0fb0d9e3396bcd6d2c60"
end
