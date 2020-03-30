require 'sinatra'
require 'sinatra/activerecord'
require_relative './models/person'
require_relative './models/department'
require_relative './models/company'
require 'byebug'

get '/' do
  erb :index
end

post '/submit' do
  @person = Person.new(params[:person])
  if @person.save
    redirect '/people'
  else
    "Sorry, there was an error!"
  end
end

get '/people' do
  @people = Person.all
  erb :people
end
