require_relative "./app.rb"
ActiveRecord::Base.logger = nil

a = Department.all.each {
  |d|
  puts "Department: #{d.name}"
  d.people.map { |pp| puts "       Employee: #{pp.name}" }
}

