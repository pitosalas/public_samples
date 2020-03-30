require_relative '../demo_app.rb'
puts "[seeds.rb]"
puts "[creating seed Persons]"
Person.create(name: "John", dob: '12-12-1980', gender: 'f', zipcode: 12355)
Person.create(name: "Jake", dob: '12-12-2000', gender: 'm', zipcode: 12355)
Person.create(name: "Jane", dob: '12-12-2018', gender: 'f', zipcode: 12355)
puts "Created #{Person.count} people"

puts "[creating seed Hashtags]"
Hashtag.create(name: "programming")
Hashtag.create(name: "recreation")
puts "Created #{Hashtag.count} hashtags"

puts "[create registrations]"
