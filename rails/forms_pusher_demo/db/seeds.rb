# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating categories"
Category.destroy_all

books = Category.create(title: "book", description: "Books, Magazines etc.")
electronics = Category.create(title: "electronics", description: "Computer, Cellphone, etc")
clothing = Category.create(title: "clothing", description: "Shoes, Jackets, Belts, etc")
jewelry = Category.create(title: "jewelry", description: "Rings, watches, necklaces, etc")

owners = ["Jane Smith", "Ira Levin", "George Benson"]
colors = ["red", "brown", "green", "white", "tiny"]
clothingnames = ["shoes", "wallet", "belt"]
adjective = ["My favorite", "The perfect", "A great"]
categories = [books, electronics, clothing, jewelry]

puts "creating sample items"
50.times do
  title = colors.sample + " " + clothingnames.sample
  description = adjective.sample + " " + title
  Item.create(title: title, description: description, owner: owners.sample, category: categories.sample)
end
