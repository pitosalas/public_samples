# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  new_user_name = Faker::Name.name
  puts "Creating user #{new_user_name}"
  User.create(
    name: new_user_name,
  )
end

5.times do
  tag_name = Faker::Tea.variety
  puts "Creating tag #{tag_name}"
  Tag.create(
    name: tag_name,
  )
end

20.times do
  poster_name = Faker::Movie.title
  puts "Creating Poster #{poster_name}"
  Poster.create(
    name: poster_name,
  )
end
