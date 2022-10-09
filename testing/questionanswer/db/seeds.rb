# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Answer.destroy_all
Question.destroy_all

questions = [
  {q: "When an Excel worksheet is copied, its CustomProperties collection does not get copied?", a: ""},
  {q: "JS: Sort array of objects highest to lowest by key value of the object", a: "a.sort((a, b) => b.a - a.a)"},
  {q: "split the string with maximum and minimum length", a: ""},
  {q: "find longest consequence of numbers so adjacents are factors or multiples", a: ""}
]

questions.each do |q|
  Question.create(question: q[:q]).answers.create(body: q[:a])
end
