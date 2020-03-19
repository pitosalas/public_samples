# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Farmer.destroy_all
Cow.destroy_all

15.times do
  f = Farmer.create(name: Faker::Name.name)
  3.times do
    f.cows.create(name: Faker::Name.first_name)
  end
end
