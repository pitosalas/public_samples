# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Event.delete_all
Human.delete_all
Registration.delete_all

3.times do
  event_name = (Faker::Hacker.ingverb + " " + Faker::Hacker.noun + "s").capitalize
  puts "Creating #{event_name}"
  Event.create(name: event_name, event_date: Faker::Date.between(from: 1.year.ago, to: 1.day.ago), event_time: '12:00pm')
end

(1..5).each do
  p = Human.create(name: Faker::Name.name,
    dob: Faker::Date.between(from: 30.years.ago, to: 10.years.ago),
    gender: ['f', 'm'].sample, zipcode: Faker::Address.zip)
  puts p.name
end

10.times do
  r = Registration.create(human_id: Human.all.sample.id, event_id: Event.all.sample.id, status: "OK", comment: "Wonderful!")
end