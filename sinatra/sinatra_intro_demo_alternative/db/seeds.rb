require 'faker'
require_relative '../app.rb'
Department.destroy_all
Person.destroy_all

1..2.times { |i| Company.create(name: "Company #{i}") }

1..10.times do
  |i|
  Department.create(name: Faker::Company.industry, company_id: i/5+1)
end

1..25.times do
  Department
    .all
    .sample
    .people
    .create(name: Faker::BojackHorseman.character, birthday: Faker::Date.birthday(0, 100))
end
