require 'pry-byebug'
require 'sinatra'
require 'sinatra/activerecord'
require './models/model'

get '/' do
  erb :index
end

post '/submit' do
  @model = Model.new(params[:model])
  if @model.save
    redirect '/models'
  else
    'Sorry, there was an error!'
  end
end

get '/models' do
  @models = Model.all
  erb :models
end
