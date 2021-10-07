# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://lcx.wien/blog/processing-14-million-csv-records-in-ruby/
require 'smarter_csv'

# https://github.com/grosser/parallel
require 'parallel'
require 'ruby-progressbar'

# https://github.com/zdennis/activerecord-import
require 'activerecord-import'

# chunks_movies = SmarterCSV.process("db/movie_data.csv", chunk_size: 500)
# Parallel.each(chunks_movies, in_processes: 10, progress: "Importing Data") do |chunk|
#   Movie.create!(chunk)
# end

chunks_films = SmarterCSV.process("db/imdbmovies.csv", chunk_size: 1000)
Parallel.each(chunks_films, in_processes: 5, progress: "Importing Data") do |chunk|
  chunk.group_by(&:keys).each_value do |subchunk|
    Film.import(subchunk)
  end
end
