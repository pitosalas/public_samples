country_list = [
  [ "Germany", ["Berlin", "Bonn"]],
  [ "France", ["Paris", "Lyon"]],
  [ "Netherlands", ["Amsterdam", "Rotterdam"]]
]

Country.delete_all

country_list.each do |country|
  new_country = Country.create( name: country[0])
  country[1].each do
    |city|Co
    c = City.new(name: city, country_id: new_country.id)
    c.save
end
end

puts "#{Country.all.size} Country records in the database now"
