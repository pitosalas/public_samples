# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# seeds.rb
25.times do
  Course.create(number: Faker::Number.number(4),
                name: Faker::Company.catch_phrase,
                desc: Faker::Hacker.say_something_smart,
                prof: Faker::Name.name)
end
